import Subject from "../Subject";
import '../Grades.css'
function Grade7() {
  return (
    <div className="grade">
      <p>
        Welcome to the Grade 7 Learning Materials page! Here, you will find a
        collection of resources designed to help you succeed in your studies and
        explore new concepts. Whether you're studying at school or home, these
        materials will guide you through the exciting subjects you'll encounter
        in Grade 7.
      </p>
      <h2>Choose The Subject You Want to Study</h2>
      <div className="books">
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      <Subject/>
      </div>

    </div>
  );
}

export default Grade7
