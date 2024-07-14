import Subject from "../Subject";
import "../Grades.css";
import maths from "../../../../images/maths.jpeg";
import amharic from "../../../../images/amharic.jpeg";
import english from '../../../../images/englidh.jpg'
import social from '../../../../images/social-science1-1200x675.png'
import general from '../../../../images/general-science-1200x675.png'
import pe from '../../../../images/Physical-Education-1200x675.jpg'
import carrer from '../../../../images/carrer.webp'
import pva from '../../../../images/arts.jpg'
import it from '../../../../images/IT.png'
import citizen from '../../../../images/citizen.jpeg'
import mother from '../../../../images/mother_tongue-1200x675.jpeg'
import { Link } from "react-router-dom";
function Grade8() {
  return (
    <div className="grade">
      <p>
        Welcome to the Grade 8 Learning Materials page! Here, you'll find a
        collection of essential textbooks to support your academic success in
        various subjects. Whether you're studying at school or at home, these
        resources will help you deepen your understanding and build on your
        existing knowledge. Explore the exciting topics of Grade 8 and let these
        materials guide you towards achieving your academic goals.
      </p>
      <h2>Choose Text Book</h2>
      <div className="books">
        <Link to="/resources/elementary/grade8/amharic"><Subject number={1} title={"Amharic"} image={amharic} /></Link>
        <Link to='/resources/elementary/grade8/english'><Subject number={2} title={"English"} image={english} /></Link>
        <Link to="/resources/elementary/grade8/maths"><Subject number={3} title={"Mathematics"} image={maths} /></Link>
        <Link to="/resources/elementary/grade8/social"><Subject number={4} title={"Social Studies"} image={social} /></Link>
        <Link to="/resources/elementary/grade8/general"><Subject number={5} title={"General Science"} image={general} /></Link>
        <Link to="/resources/elementary/grade8/pva"><Subject number={6} title={"PVA"} image={pva} /></Link>
        <Link to="/resources/elementary/grade8/it"><Subject number={7} title={"IT"} image={it} /></Link>
        <Link to="/resources/elementary/grade8/citizen"><Subject number={8} title={"Citizenship Education"} image={citizen} /></Link>
        <Link to="/resources/elementary/grade8/carrer"><Subject number={9} title={"Carrer"} image={carrer} /></Link>
      </div>
    </div>
  );
}

export default Grade8;
