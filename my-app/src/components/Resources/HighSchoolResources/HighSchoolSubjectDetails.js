import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import pdf from '../../../images/pdf2.png';
import download from '../../../images/downloading.png';
import './HighSchoolSubjectDetail.css';

function openBook(grade, subject) {
  window.location.href = `${process.env.PUBLIC_URL}/books/${grade}/${grade}-${subject}.pdf`;
}

function HighSchoolSubjectDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { grade, subject } = useParams();
  const pdfPath = `${process.env.PUBLIC_URL}/books/${grade}/${grade}-${subject}.pdf`;

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${grade}-${subject}.pdf`;
    link.click();
  };

  const currentSubject = JSON.parse(localStorage.getItem(`${grade}${subject}`));

  if (!currentSubject) {
    return (
      <div>
        Subject details not found. Please check the URL or the data in local
        storage.
      </div>
    );
  }

  return (
    <div className="outer-detail-container">
      <div className="detail-container" style={{ marginBottom: '30px' }}>
        <div className="top-container">
          <div className="book-image">
            <img
              src={currentSubject.image}
              alt={`${currentSubject.title} image`}
            />
          </div>
          <div className="header-description">
            <h2 className="detail-intro">
              <strong>
                Ethiopian Grade {currentSubject.summery.grade} (New Curriculum){' '}
                {currentSubject.title} Textbook
              </strong>
            </h2>
            <h3 className="detail-intro">
              <strong>{currentSubject.description}</strong>
            </h3>
          </div>
        </div>

        <div className="chapters">
          <h2>Chapters in this textbook</h2>
          <h3>
            This Textbook contains {currentSubject.chapters.length} chapters
          </h3>
          <ul>
            {currentSubject.chapters.map((chapter) => (
              <li key={chapter}>{chapter}</li>
            ))}
          </ul>
        </div>

        <h2 className="detail-intro">Book Summary</h2>

        <div className="detail-summery">
          <div>
            <p>
              <strong>Country</strong>: {currentSubject.summery.country}
            </p>
            <p>
              <strong>Publisher</strong>: {currentSubject.summery.publisher}
            </p>
            <p>
              <strong>Subject</strong>: {currentSubject.summery.subject}
            </p>
            <p>
              <strong>Grade</strong>: {currentSubject.summery.grade}
            </p>
          </div>
          <div>
            <p>
              <strong>Curriculum</strong>: {currentSubject.summery.curriculum}
            </p>
            <p>
              <strong>Total Units</strong>: {currentSubject.summery.units}
            </p>
            <p>
              <strong>Total Pages</strong>: {currentSubject.summery.pages}
            </p>
            <p>
              <strong>File Size</strong>: {currentSubject.summery.size}
            </p>
          </div>
        </div>
        <div className="bottom-detail">
          <button
            onClick={() => {
              openBook(grade, subject);
            }}
            style={{ margin: 'auto' }}
            id="download-button"
          >
            <img style={{ width: '20px' }} src={pdf} alt="Read Book" /> Read
            Book
          </button>
          <button
            onClick={handleDownload}
            style={{ margin: 'auto' }}
            id="download-button"
          >
            <img style={{ width: '20px' }} src={download} alt="Download" />{' '}
            Download
          </button>
        </div>
      </div>
      <div className="sidebar">
        <h2>
          Related {grade.slice(0, 1).toUpperCase()}
          {grade.slice(1)} TextBooks
        </h2>
        {currentSubject.relatedSubjects.map((sub) => (
          <Link to={sub.link} key={sub.name}>
            <div className="related-links">
              <img src={pdf} alt={`${sub.name} link`} />
              <h3>{sub.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HighSchoolSubjectDetail;
