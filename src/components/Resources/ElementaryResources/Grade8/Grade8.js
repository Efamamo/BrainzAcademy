import Subject from "../Subject";
import "../Grades.css";
import maths from "../../../../images/maths.jpeg";
import amharic from "../../../../images/amharic.jpeg";
function Grade8() {
  return (
    <div className="grade">
      <p>
        Welcome to the Grade 7 Learning Materials page! Here, you will find a
        collection of resources designed to help you succeed in your studies and
        explore new concepts. Whether you're studying at school or home, these
        materials will guide you through the exciting subjects you'll encounter
        in Grade 7.
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

export default Grade8;
