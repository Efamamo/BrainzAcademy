import AboutContainer from "./AboutContainer";
import aboutInfo from "./data/AboutInfo";
import "./About.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      
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
