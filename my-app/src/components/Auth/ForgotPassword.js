import React, { useRef, useState } from 'react';
import './ForgotPasswordStyles.css';

export default function ForgotPassword() {
  const [emailError, setEmailError] = useState(null);
  const emailInputRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const email = emailInputRef.current.value;

    // Add your email verification logic here
    try {
      const response = await fetch(
        'http://localhost:4000/auth/forgot-password',
        {
          method: 'PATCH',
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200) {
        // Handle success
        alert(
          'If an account with that email exists, we have sent a reset link to it.'
        );
      } else {
        const data = await response.json();
        setEmailError(data.errors.email);
      }
    } catch (error) {
      setEmailError('An error occurred');
    }
  }

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <p>
          Please enter your email address. We will send you a link to reset your
          password.
        </p>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              ref={emailInputRef}
              placeholder="Enter your email"
              required
            />
          </div>
          {emailError && <p className="error-message">{emailError}</p>}
          <button type="submit" className="submit-button">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
