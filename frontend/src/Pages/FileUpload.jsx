import React, { useState } from 'react';
import axios from 'axios';
import '../Style/FileUploadStyle.css';



const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const api = axios.create({
        baseURL: '/api',
        withCredentials: true
      })

    
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', selectedFile);

        // Placeholder for the upload endpoint
        api.post('/upload', formData)
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <>
            <div className="container d-flex justify-content-center mt-5" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>

                <form onSubmit={handleSubmit} className="mb-3 d-flex justify-content-center">
                    <label htmlFor="formFile" className="form-label">Upload Your File</label>
                    {selectedFile && (
                        <button 
                            type="button" 
                            className="btn btn-outline-secondary mb-3"
                            style={{ cursor: 'default' }}
                        >
                            {selectedFile.name}
                        </button>
                    )}                

                    <input 
                        className="form-control" 
                        type="file" 
                        id="formFile" 
                        onChange={handleFileChange} 
                    />
                    

                </form>
            </div>
        </>
    )
}

export default FileUpload;
