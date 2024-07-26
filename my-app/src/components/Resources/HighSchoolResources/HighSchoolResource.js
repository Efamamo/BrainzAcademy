import { useEffect } from "react";
import highschool from "../../../images/highschool-students.jpeg";
import "../EachResources.css";
import { Link, useParams } from "react-router-dom";

function HighSchoolResource() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   
      <div className="highschoolBody">
        <div className="grades">
          <h1>Welcome to Highschool Resources</h1>
          <p>
            Welcome to BrainzAcademy's Highschool Resources page. This section
            is designed to provide students with the necessary materials to
            excel in their studies. Select your grade below to access tailored
            resources for your educational level.
          </p>
          <h2>Choose Grade</h2>
          <Link to='/resources/highschool/grade9'><button>Grade 9</button></Link>
          <Link to='/resources/highschool/grade10'><button>Grade 10</button></Link>
          <Link to='/resources/highschool/grade11'><button>Grade 11</button></Link>
          <Link to='/resources/highschool/grade12'><button>Grade 12</button></Link>
        </div>
        <img className="image" src={highschool} alt="" />
        
      </div>
      
  );
}

export default HighSchoolResource;
