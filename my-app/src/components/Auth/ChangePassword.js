import React, { useRef, useState, useEffect } from 'react';
import './ResetPasswordStyles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/store';
import refreshToken from './refresh';

export default function ChangePassword() {
  const [oldPasswordError, setOldPasswordError] = useState(null);
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const auth = useSelector((state) => state.auth);

  async function submitHandler(e) {
    e.preventDefault();

    const oldPassword = oldPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;

    try {
      const response = await fetch(
        'http://localhost:4000/auth/change-password',
        {
          method: 'PATCH',
          body: JSON.stringify({ oldPassword, newPassword }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );

      if (response.status === 204) {
        alert('Your password has been changed successfully.');
        setNewPasswordError(false);
        setOldPasswordError(false);
        setServerError(false);
        navigate('/settings');
      } else if (response.status === 401 || response.status === 403) {
        const refreshSuccessful = await refreshToken();
        if (refreshSuccessful) {
          dispatch(
            authActions.refresh({
              accessToken: localStorage.getItem('accessToken'),
            })
          );
          const newResponse = await fetch(
            'http://localhost:4000/auth/change-password',
            {
              method: 'PATCH',
              body: JSON.stringify({ oldPassword, newPassword }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.accessToken}`,
              },
            }
          );
          if (newResponse.status === 204) {
            alert('Your password has been changed successfully.');
            setNewPasswordError(false);
            setOldPasswordError(false);
            setServerError(false);
            navigate('/settings');
          } else if (newResponse.status === 401 || newResponse.status === 403) {
            dispatch(authActions.logout());
            localStorage.setItem('accessToken', null);
            localStorage.setItem('refreshToken', null);
            navigate('/login');
          } else {
            const newdata = await newResponse.json();

            if (!newdata.errors['oldPassword']) {
              setOldPasswordError(false);
            }
            if (!newdata.errors['newPassword']) {
              setNewPasswordError(false);
            }

            for (const error in newdata.errors) {
              if (error == 'oldPassword') {
                console.log('old');
                setOldPasswordError(newdata.errors[error]);
              } else if (error == 'newPassword') {
                setNewPasswordError(newdata.errors[error]);
              } else if (error == 'server') {
                setServerError('server error');
              } else {
                dispatch(authActions.logout());
                localStorage.setItem('accessToken', null);
                localStorage.setItem('refreshToken', null);
                localStorage.setItem('isLoggedIn', false);

                navigate('/login');
              }
            }
          }
        } else {
          dispatch(authActions.logout());
          localStorage.setItem('accessToken', null);
          localStorage.setItem('refreshToken', null);
          localStorage.setItem('isLoggedIn', false);

          navigate('/login');
        }
      } else {
        const data = await response.json();

        if (!data.errors['oldPassword']) {
          setOldPasswordError(false);
        }
        if (!data.errors['newPassword']) {
          setNewPasswordError(false);
        }

        for (const error in data.errors) {
          if (error == 'oldPassword') {
            console.log('old');
            setOldPasswordError(data.errors[error]);
          } else if (error == 'newPassword') {
            setNewPasswordError(data.errors[error]);
          } else if (error == 'server') {
            setServerError('server error');
          } else {
            dispatch(authActions.logout());
            localStorage.setItem('accessToken', null);
            localStorage.setItem('refreshToken', null);
            localStorage.setItem('isLoggedIn', false);

            navigate('/login');
          }
        }
      }
    } catch (error) {
      setServerError('server error');
    }
  }

  return (
    <div className="reset-password-container" style={{ height: '62vh' }}>
      <div className="reset-password-form">
        <h2>Change Password</h2>
        <p>
          Enter your old password and a new password to Change your password.
        </p>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="oldPassword">Old Password</label>
            <input
              id="oldPassword"
              type="password"
              ref={oldPasswordRef}
              placeholder="Enter your old password"
              required
            />
            {oldPasswordError && (
              <p className="error-message">{oldPasswordError}</p>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              type="password"
              ref={newPasswordRef}
              placeholder="Enter your new password"
              required
            />
            {newPasswordError && (
              <p className="error-message">{newPasswordError}</p>
            )}
          </div>
          {serverError && <p className="error-message">{serverError}</p>}
          <button type="submit" className="submit-button">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
