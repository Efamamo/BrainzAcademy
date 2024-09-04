import { Link } from 'react-router-dom';
import './Footer.css';
import { useSelector } from 'react-redux';
function QuickLink() {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="footer-section footer-navigation">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {auth.isLoggedin && (
          <>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/exams">Quizzes</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default QuickLink;
