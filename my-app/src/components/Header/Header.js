import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import Logout from '../Auth/Logout';
import user from '../../images/user.png';
import close from '../../images/close.png';
import { useState } from 'react';
import profile from '../../images/profile.png';
import settings from '../../images/settings.png';
function Header() {
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="title">
      <h1 className="logo">BrainzAcademy</h1>
      <ul className="links">
        <li>
          <NavLink activeclassname="active" to="/">
            {' '}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/about">
            About
          </NavLink>
        </li>
        {auth.isLoggedin && (
          <>
            {' '}
            <li>
              <NavLink activeclassname="active" to="/resources">
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/exams">
                Quizzes
              </NavLink>
            </li>
          </>
        )}
      </ul>

      {auth.isLoggedin ? (
        <img
          className="person"
          onClick={toggleMenu}
          src={user}
          alt="person-icon"
        />
      ) : (
        <div></div>
      )}
      {auth.isLoggedin ? (
        <div className={`side-container ${isOpen ? 'open' : ''}`}>
          <div className="manage-header">
            <h2>Manage Account</h2>
            <img
              src={close}
              alt="close-icon"
              className="close-icon"
              onClick={toggleMenu}
            />
          </div>

          <ul>
           
            <div className="manage-each" onClick={toggleMenu}>
              <img src={settings} alt="settings" />
              <li>
                <Link style={{ color: 'black' }} to="/settings">
                  Settings
                </Link>
              </li>
            </div>

            <Logout onLogout={toggleMenu} />
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
