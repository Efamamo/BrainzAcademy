import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [serverError, setServerError] = useState(false);

  const emailInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    try {
      const response = await fetch('http://localhost:4000/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.status == 201) {
        setEmailError(false);
        setPasswordError(false);
        setUsernameError(false);
        setServerError(false);
      } else {
        console.log(data);
        if (!data.errors['password']) {
          setPasswordError(false);
        }
        if (!data.errors['username']) {
          setUsernameError(false);
        }
        if (!data.errors['email']) {
          setEmailError(false);
        }
        if (!data.errors['server']) {
          setServerError(false);
        }
        for (const error in data.errors) {
          if (error === 'password') {
            setPasswordError(data.errors[error]);
          }
          if (error === 'username') {
            setUsernameError(data.errors[error]);
          }
          if (error === 'email') {
            setEmailError(data.errors[error]);
          }
          if (error === 'server') {
            setServerError('server error');
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          ref={usernameInputRef}
          name="username"
          placeholder="Username"
          type="text"
          required
        />
        {usernameError ? <p style={{ color: 'red' }}>{usernameError}</p> : null}
        <label>Email</label>
        <input
          ref={emailInputRef}
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        {emailError ? <p style={{ color: 'red' }}>{emailError}</p> : null}
        <label>Password</label>
        <input
          ref={passwordInputRef}
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        {passwordError ? <p style={{ color: 'red' }}>{passwordError}</p> : null}
        {serverError ? <p style={{ color: 'red' }}>{serverError}</p> : null}

        <button>Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
