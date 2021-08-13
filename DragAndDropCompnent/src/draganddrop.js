import React, { useState } from 'react';


const Draganddrop = () => {

  const [filename,setFilename] = useState([]);
  const [filesize, setFilesize] = useState([]);
  const [error, setError] = useState("");
  
  
  const dragOver = (e) => {
      e.preventDefault();
  }
  const dragEnter = (e) => {
      e.preventDefault();
  }
  const dragLeave = (e) => {
      e.preventDefault();
  }
  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    //console.log(files);
    let file_name = files[0].name;
    let file_size = files[0].size;
    // console.log(file_name);
    let fileType = file_name.split('.').pop();
    console.log(fileType)

    let extension = ["xlsx", "xlsm"];
    if(extension.includes(fileType)){
      let dragndroparea = document.getElementById("dragndrop");
      dragndroparea.style.display = "none";
      let file_name_size_area = document.getElementById("file_name_size");
      file_name_size_area.style.display = "block";

      setFilename([file_name]);
      setFilesize([file_size])
    }
    else{
      let x = document.getElementById("file_name_size");
      x.style.display = "none";
      setError("Invalid File!! Only excel files can be upload.");
    }
  }
    return(
        <>
        <div className="container">
          <div className="drop-container" 
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
          >
          <div className="drop-message">
              <h5 id="dragndrop">Drag & Drop files here</h5>
              <div id="file_name_size">
                <h5>File Name: {filename[0]}</h5>
                <h5>File Size:{filesize[0]}</h5>
              </div>
              <p>{error}</p>
            </div>
          </div>
        </div>
        </>
    )
}
export default Draganddrop;