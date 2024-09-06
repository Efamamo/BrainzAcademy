import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import Logout from '../Auth/Logout';
import user from '../../images/user.png';
import close from '../../images/close.png';
import { useEffect, useState } from 'react';
import profile from '../../images/profile.png';
import settings from '../../images/settings.png';
import verify from '../Auth/verify';
import { authActions } from '../../store/store';
import saveGrade7Details from '../Resources/ElementaryResources/Grade7/Details';
import saveGrade8Details from '../Resources/ElementaryResources/Grade8/Details';
import saveGrade9Details from '../Resources/HighSchoolResources/Grade9/Details';
import saveGrade10Details from '../Resources/HighSchoolResources/Grade10/Details';
import saveGrade11Details from '../Resources/HighSchoolResources/Grade11/Details';
import saveGrade12Details from '../Resources/HighSchoolResources/Grade12/Details';
function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        const valid = await verify(refreshToken);
        if (valid) {
          localStorage.setItem('isLoggedIn', true);
        } else {
          localStorage.removeItem('isLoggedIn');
        }
      }
    };

    verifyAuth();
  }, [dispatch]);
  useEffect(() => {
    saveGrade7Details();
    saveGrade8Details();
    saveGrade9Details();
    saveGrade10Details();
    saveGrade11Details();
    saveGrade12Details();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(auth.isLoggedin);
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
