import React from 'react';
import { authActions } from '../../store/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout() {
    dispatch(authActions.logout());
    localStorage.setItem('accessToken', null);
    localStorage.setItem('refreshToken', null);
    navigate('/');
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
