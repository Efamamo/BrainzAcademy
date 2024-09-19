import React, { useEffect, useState } from 'react';
import './SettingsPage.css'; // Additional styles can be added
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../../store/store';
import refreshToken from '../Auth/refresh';

const SettingsPage = () => {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState(null); // Ensure user starts as null
  const [serverError, setServerError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = 'https://brainzacademy-backend-1.onrender.com/auth/get-user';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let accessToken =
          auth.accessToken || localStorage.getItem('accessToken');

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Use the latest access token
          },
        });

        if (response.ok) {
          const u = await response.json();
          setUser(u);
        } else if (response.status === 401 || response.status === 403) {
          // Attempt to refresh the token
          const refreshSuccessful = await refreshToken();
          if (refreshSuccessful) {
            // Dispatch the new token to Redux and update localStorage
            const newAccessToken = localStorage.getItem('accessToken');
            dispatch(
              authActions.refresh({
                accessToken: newAccessToken,
              })
            );

            // Retry fetching the user with the new token
            const newResponse = await fetch(url, {
              headers: {
                Authorization: `Bearer ${newAccessToken}`, // Use the new access token
              },
            });

            if (newResponse.ok) {
              const newu = await newResponse.json();
              setUser(newu);
            } else {
              handleAuthError(newResponse.status);
            }
          } else {
            handleAuthError(response.status);
          }
        } else {
          setServerError('Server error occurred.');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setServerError('An unexpected error occurred.');
      }
    };

    fetchUser();
  }, [auth.accessToken, dispatch, navigate]);

  const handleAuthError = (status) => {
    if (status === 401 || status === 403) {
      dispatch(authActions.logout());
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.setItem('isLoggedIn', false);

      navigate('/');
    } else {
      setServerError('Server error occurred.');
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1 className="settings-title">Settings</h1>
        <div className="settings-section">
          <h2 className="section-title">Account</h2>
          <div className="settings-item">
            <label className="settings-label">Username:</label>
            <span className="settings-value">
              {user ? user.username : 'Loading...'}
            </span>
          </div>
          <div className="settings-item">
            <label className="settings-label">Email:</label>
            <span className="settings-value">
              {user ? user.email : 'Loading...'}
            </span>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">Actions</h2>

          <button className="action-btn change-password-btn">
            <Link to="/change-password">Change Password</Link>
          </button>
        </div>
        {serverError ? <p style={{ color: 'red' }}>{serverError}</p> : null}
      </div>
    </div>
  );
};

export default SettingsPage;
