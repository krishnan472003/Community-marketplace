import React, { useState } from 'react';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a FileReader to read the file and convert it to Base64.
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBase64Image(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setBase64Image(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can implement the file upload logic here, e.g., send the Base64 data to a server.
      // For simplicity, we will just log the file details.
      console.log('Uploading file:', selectedFile.name);
      console.log('Uploading file:', base64Image);
     
      setFileUploaded(true);
    } else {
      alert('Please select a file before uploading.');
    }
  };

  return (
    <div>
      {!fileUploaded ? (
        <div>
          <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload File</button>
        </div>
      ) : null}
      {base64Image && (
        <div>
          <h4>Preview:</h4>
          <img
            src={base64Image}
            alt="Uploaded Preview"
            style={{ maxWidth: '100%', height: '400px', width: '400px' }} // Adjust the width as needed
          />
        </div>
      )}
    </div>
  );
}

export default FileUploader;
