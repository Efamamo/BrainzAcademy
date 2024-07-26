import React from "react";
import download from '../../../images/downloading.png';

function Subject({ number, title, image }) {
  return (
    <div className="w-3/4 flex m-auto ">
      <div className="gap-10 bg-white shadow-lg rounded-xl overflow-hidden">
        <div className='p-4'>
          <p className="text-xl font-semibold text-green-900">{title}</p>
        </div>
        <div className="p-4 flex justify-center">
          <img className='rounded-xl h-60 w-auto' src={image} alt={title} />
        </div>
        <div className="p-4 flex justify-center">
          <button className="flex items-center bg-green-800 text-white text-lg px-6 py-2 rounded-xl">
            <img className="mr-2" style={{ width: '20px' }} src={download} alt="download" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subject;
