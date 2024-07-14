import Subject from "../Subject";
import "../Grades.css";
import maths from "../../../../images/maths.jpeg";
import amharic from "../../../../images/amharic.jpeg";
function Grade7() {
  return (
    <div className="grade">
      <p>
        Welcome to the Grade 7 Learning Materials page! Here, you'll find a
        collection of essential textbooks to support your academic success in
        various subjects. Whether you're studying at school or at home, these
        resources will help you deepen your understanding and build on your
        existing knowledge. Explore the exciting topics of Grade 7 and let these
        materials guide you towards achieving your academic goals.
      </p>
      <h2>Choose Text Book</h2>
      <div className="books">
        <Subject number={1} title={"Amharic"} image={amharic} />
        <Subject number={2} title={"English"} image={maths} />
        <Subject number={3} title={"Mathematics"} image={amharic} />
        <Subject number={4} title={"Social Science"} image={maths} />
        <Subject number={5} title={"General Science"} image={amharic} />
        <Subject number={6} title={"PVA"} image={maths} />
        <Subject number={7} title={"IT"} image={amharic} />
        <Subject number={8} title={"Citizenship Education"} image={maths} />
        <Subject number={9} title={"Mother Tongue"} image={amharic} />
        <Subject number={10} title={"Physical Education"} image={maths} />
        <Subject number={11} title={"Carrer"} image={amharic} />
      </div>
    </div>
  );
}

export default Grade7;
