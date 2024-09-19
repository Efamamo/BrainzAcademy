import React, { useState } from 'react';
import { authActions } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logout from '../../images/logout.png';
import './AuthStyles.css';
import { CircularProgress } from '@mui/material';
export default function Logout({ onLogout }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const auth = useSelector((state) => state.auth);

  async function handleLogout() {
    setIsLoading(true);
    await fetch('https://brainzacademy-backend-1.onrender.com/auth/logout', {
      method: 'POST',
      body: JSON.stringify({
        token: auth.refreshToken,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setIsLoading(false);

    dispatch(authActions.logout());
    localStorage.setItem('accessToken', null);
    localStorage.setItem('refreshToken', null);
    localStorage.removeItem('isLoggedIn');

    onLogout();
    navigate('/');
  }
  return (
    <div onClick={handleLogout} className="manage-each">
      {isLoading ? (
        <CircularProgress
          size={40}
          thickness={5}
          sx={{ color: 'black', margin: '10px auto' }}
        />
      ) : (
        <>
          <img className="person" src={logout} alt="user-pic" /> <p>Logout</p>
        </>
      )}
    </div>
  );
}
