import { Link } from 'react-router-dom';
import brain from '../../images/cute-brain.png';
import './Home.css';
import { useSelector } from 'react-redux';
function Home() {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="landing-container">
      <div className="greeting">
        <h1>Empowering Minds, One Quiz at a Time</h1>
        <p>
          At BrainzAcademy, we are dedicated to enhancing the learning
          experience for students of all ages. We offer a comprehensive range of
          educational materials tailored to each level of education, from
          elementary school to advanced studies. Our interactive platform
          provides an extensive collection of quizzes designed to match various
          educational levels and difficulty tiers. This ensures that learners
          are constantly challenged and engaged.
          <br />
          <br />
          Our services include personalized quiz recommendations based on the
          student's performance and progress tracking through detailed score
          reports. Whether you are looking to reinforce classroom learning,
          prepare for exams, or simply broaden your knowledge, BrainzAcademy is
          your go-to resource. Join us in our mission to make learning fun,
          effective, and accessible for everyone.
        </p>
        {!auth.isLoggedin && (
          <Link className="get-started" to="/signup">
            Get Started
          </Link>
        )}
      </div>

      <div className="landing-image-container">
        <img className="header-image" src={brain} alt="" />
      </div>
    </div>
  );
}

export default Home;
