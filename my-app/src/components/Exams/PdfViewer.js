import React, { useState, useRef } from 'react';
import { Document, Page } from 'react-pdf';
import { GrNext, GrPrevious } from 'react-icons/gr';

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const divRef = useRef();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber((prevState) => prevState + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevState) => prevState - 1);
    }
  };

  return (
    <div ref={divRef}>
      <div>
        <p>
          {pageNumber} / {numPages}
        </p>
        <div style={{ margin: '10px 0' }}>
          {pageNumber > 1 && (
            <button onClick={handlePreviousPage}>
              <GrPrevious />
            </button>
          )}
          {pageNumber < numPages && (
            <button onClick={handleNextPage}>
              <GrNext />
            </button>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            width={divRef.current?.clientWidth * 0.95}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
