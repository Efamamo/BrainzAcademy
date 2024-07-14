import "./ElemetarySubjectDetail.css";
import { useParams } from "react-router-dom";
import download from '../../../images/downloading.png'
function ElementarySubjectDetail() {
  const {grade, subject} = useParams()


  const read = JSON.parse(localStorage.getItem(`${grade}${subject}`));
  

  return (
    <div className="detail-container" style={{ marginBottom: "30px" }}>
      <h1>
        <strong>Ethiopian Grade 8 (New Curriculum) {read.title} Textbook</strong>
      </h1>
      <p className="detail-intro">
        <strong>{read.description}</strong>
      </p>
      <div className="chapters">
        <h2>Chapters in this textbook</h2>

        <h3>This Textbook contains {read.chapters.length} chapters</h3>
        <ul>
            {read.chapters.map((chapter)=>(<li key={chapter}>{chapter}</li>))}
                  
          
        </ul>
      </div>

      <h2>Book Summary</h2>

      <div className="detail-summery">
        <div>
          <p>
            <strong>Country</strong>: {read.summery.country}
          </p>
          <p>
            <strong>Publisher</strong>: {read.summery.publisher}
          </p>
          <p>
            <strong>Subject</strong>: {read.summery.subject}
          </p>
          <p>
            <strong>Grade</strong>: {read.summery.grade}
          </p>
        </div>
        <div>
          <p>
            <strong>Curriculum</strong>: {read.summery.curriculum}
          </p>
          <p>
            <strong>Total Units</strong>: {read.summery.units}
          </p>
          <p>
            <strong>Total Pages</strong>: {read.summery.pages}
          </p>
          <p>
            <strong>File Size</strong>: {read.summery.size}
          </p>
        </div>
      </div>
      <div>
      <button style={{margin: 'auto'}} id='download-button'><img style={{width:'20px'}} src={download}/> Download</button>
      </div>
    </div>
  );
}

export default ElementarySubjectDetail;
