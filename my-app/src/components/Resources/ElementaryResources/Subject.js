import './Subject.css';
import download from '../../../images/downloading.png';
function Subject({ number, title, image, grade }) {
  const pdfPath = `${process.env.PUBLIC_URL}/books/${grade}/${grade}-${title}.pdf`;

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${grade}-${title}.pdf`;
    link.click();
  };

  return (
    <div className="subject-container">
      <div className="top-subject-container">
        <span className={number < 10 ? 'number' : 'number number-large'}>
          {number}
        </span>
        <p className="subject-title">{title}</p>
      </div>
      <div className="subject-image">
        <img src={image} alt="maths" />
      </div>
      <button id="download-button" onClick={handleDownload}>
        <img style={{ width: '20px' }} src={download} /> Download
      </button>
    </div>
  );
}

export default Subject;
