import React, { useState } from 'react';
import '../Style/FileUploadStyle.css';


const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', selectedFile);

        // Placeholder for the upload endpoint
        fetch('YOUR_UPLOAD_ENDPOINT', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <>
            <div className="container d-flex justify-content-center mt-5" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>

                <form onSubmit={handleSubmit} className="mb-3 d-flex justify-content-center">
                    <label htmlFor="formFile" className="form-label">Upload Your File</label>
                    {selectedFile && <p className='file-name'>Selected file: {selectedFile.name}</p>}                
                    <input className="form-control" type="file" id="formFile" />
                </form>
            </div>
        </>
    )
}

export default FileUpload;
