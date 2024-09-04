import React from 'react';
import { authActions } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from '../../images/user.png';
import './AuthStyles.css';
export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  async function handleLogout() {
    await fetch('http://localhost:4000/auth/logout', {
      method: 'POST',
      body: JSON.stringify({
        token: auth.refreshToken,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch(authActions.logout());
    localStorage.setItem('accessToken', null);
    localStorage.setItem('refreshToken', null);
    navigate('/');
  }
  return (
    <div>
      <img
        onClick={handleLogout}
        className="person"
        src={user}
        alt="user-pic"
      />{' '}
    </div>
  );
}
