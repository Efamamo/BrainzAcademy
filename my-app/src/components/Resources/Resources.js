import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Resources.css";
import elementaryImg from "../../images/elementary-res.jpg";
import highSchoolImg from "../../images/highschool-res.jpg";
import higherLevelImg from "../../images/univ.jpg";
import generalKnowledgeImg from "../../images/GK.jpeg";
import ResourceCard from "./ResourceCard";

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
         <ResourceCard image={elementaryImg} name="Elementary"/>
        </Link>

        <Link to="/resources/highschool">
        <ResourceCard image={highSchoolImg} name="High School"/>
        </Link>

        <Link to="/resources/highlevel">
        <ResourceCard image={higherLevelImg} name="Higher Level"/>
        </Link>

        <Link to="/resources/general-knowledge">
        <ResourceCard image={generalKnowledgeImg} name="General Knowledge"/>   
        </Link>
      </div>
    </div>
  );
}

export default Resources;
