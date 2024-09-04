import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../../store/store';

export default function Login() {
  const [verificationError, setVerificationError] = useState(false);
  const [credentialError, setCredentialError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  async function submitHandler(e) {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      setIsLoading(true);
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

      setIsLoading(false);

      const data = await response.json();

      if (response.status == 201) {
        setCredentialError(false);
        setServerError(false);
        setVerificationError(false);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
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
    <div>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input
          ref={emailInputRef}
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        <label>Password</label>
        <input
          ref={passwordInputRef}
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        {credentialError ? (
          <p style={{ color: 'red' }}>{credentialError}</p>
        ) : null}
        {verificationError ? (
          <p style={{ color: 'red' }}>{verificationError}</p>
        ) : null}
        {serverError ? <p style={{ color: 'red' }}>{serverError}</p> : null}

        {!isLoading ? <button>Login</button> : <p>Logging In ...</p>}
      </form>
      <p>
        Dont have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
