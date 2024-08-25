import React, { useState } from 'react';
import '../styles/WorkSubmission.css';
import axios from 'axios';

const WorkSubmission = () => {
  const [file, setFile] = useState(null); // Initialize to null for clarity

  const upload = () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:8000/upload', formData)
      .then(res => {
        console.log("Uploaded successfully");
        alert('File uploaded successfully!');
      })
      .catch(err => {
        console.error(err);
        alert('Failed to upload file.');
      });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className='up'>
      <div>
        <h1>Submit your work module</h1>
      </div>
      
      <input type='file' className='in' onChange={handleFileChange} />
      <button type='button' className='but' onClick={upload}>Upload</button>
    </div>
  );
};

export default WorkSubmission;
