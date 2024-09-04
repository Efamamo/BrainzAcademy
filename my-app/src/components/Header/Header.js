import { NavLink } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import Logout from '../Auth/Logout';
function Header() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

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

      {auth.isLoggedin ? <Logout /> : <div></div>}
    </div>
  );
}

export default Header;
