import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Resources.css";
import elementaryImg from "../../images/elementary-res.jpg";
import highSchoolImg from "../../images/highschool-res.jpg";
import higherLevelImg from "../../images/univ.jpg";
import generalKnowledgeImg from "../../images/GK.jpeg";

function Resources() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resources-container">
      <div className="intro">
        <h1>Welcome to BrainzAcademy Resources</h1>
        <p>
          Explore a wide range of educational resources tailored to your level.
          Whether you're in elementary school, high school, or higher education,
          we have the materials you need to succeed. Dive into our general
          knowledge section for quizzes and learning that spans all subjects.
        </p>
      </div>
      <div className="cards-container">
        <Link to="/resources/elementary">
          <div className="card">
            <img src={elementaryImg} alt="Elementary" />
            <div className="card-content">
              <h2>Elementary</h2>
              <button className="button">Explore</button>
            </div>
          </div>
        </Link>

        <Link to="/resources/highschool">
          <div className="card">
            <img src={highSchoolImg} alt="High School" />
            <div className="card-content">
              <h2>High School</h2>
              <button className="button">Explore</button>
            </div>
          </div>
        </Link>

        <Link to="/resources/highlevel">
          <div className="card">
            <img src={higherLevelImg} alt="Higher Level" />
            <div className="card-content">
              <h2>Higher Level</h2>
              <button className="button">Explore</button>
            </div>
          </div>
        </Link>

        <Link to="/resources/general-knowledge">
          <div className="card">
            <img src={generalKnowledgeImg} alt="General Knowledge" />
            <div className="card-content">
              <h2>General Knowledge</h2>
              <button className="button">Explore</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Resources;
