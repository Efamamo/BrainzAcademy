import AboutContainer from "./AboutContainer";
import aboutInfo from "./data/AboutInfo";
import "./About.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <p className="about-intro">
       Your ultimate destination for comprehensive
        educational resources. At BrainzAcademy, we believe in empowering
        learners of all ages and levels by providing high-quality, easily
        accessible materials designed to foster knowledge and curiosity. Our
        platform is dedicated to offering a diverse range of resources, from
        textbooks and interactive quizzes to in-depth articles and study guides.
        Whether you're a student striving for excellence, a teacher seeking
        reliable teaching tools, or a lifelong learner looking to expand your
        horizons, BrainzAcademy is here to support your educational journey
        every step of the way.
      </p>
      {aboutInfo.map((info) => (
        <AboutContainer
          key={info.name}
          name={info.name}
          desc={info.desc}
          image={info.image}
          isImageTop={info.isImageTop}
        />
      ))}
    </div>
  );
}

export default About;
