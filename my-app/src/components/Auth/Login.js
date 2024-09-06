import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../../store/store';
import './AuthStyles.css';
export default function Login() {
  const [verificationError, setVerificationError] = useState(false);
  const [credentialError, setCredentialError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  useEffect(() => {
    if (auth.isLoggedin) {
      navigate('/');
    }
  }, [auth.isLoggedin, navigate]);

  async function submitHandler(e) {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.status == 201) {
        setCredentialError(false);
        setServerError(false);
        setVerificationError(false);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('isLoggedIn', true);

        dispatch(
          authActions.login({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          })
        );
        navigate('/');
      } else {
        if (!data.errors['password'] && !data.errors['email']) {
          setCredentialError(false);
        }
        if (!data.errors['verification']) {
          setVerificationError(false);
        }

        if (!data.errors['server']) {
          setServerError(false);
        }
        for (const error in data.errors) {
          console.log(error);
          if (error === 'password' || error === 'email') {
            setCredentialError(data.errors[error]);
          }
          if (error === 'verification') {
            setVerificationError('account not verified');
          }

          if (error === 'server') {
            setServerError('server error');
          }
        }
      }
    } catch (e) {
      setServerError('server error');
    }
  }

  return (
    <div className="outer-form-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className="input-container">
            <label>Email</label>
            <input
              className="auth-input"
              ref={emailInputRef}
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input
              className="auth-input"
              ref={passwordInputRef}
              name="password"
              placeholder="Password"
              type="password"
              required
            />
          </div>
          {credentialError ? <p className="error">{credentialError}</p> : null}
          {verificationError ? (
            <p className="error">{verificationError}</p>
          ) : null}
          {serverError ? <p className="error">{serverError}</p> : null}

          <button className="auth-button">Login</button>
        </form>
        <p>
          Dont have an account? <Link to="/signup">Signup</Link>
        </p>
        <p className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}
