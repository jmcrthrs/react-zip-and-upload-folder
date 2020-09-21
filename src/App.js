import React, { useRef, useState } from "react";
import Dropzone from "react-dropzone";

export default function App() {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);

  return (
    <div className="App">
      <h1>Folder upload</h1>
      <h2>Select a folder to send to the server</h2>
      <input
        ref={inputRef}
        type="file"
        webkitdirectory="true"
        multiple
        onChange={() => {
          setFiles(Array.from(inputRef.current.files));
        }}
      />
      {files.length && (
        <div>
          <h3>Selected Files</h3>
          {files.map((file) => (
            <div key={file.webkitRelativePath || file.path}>
              {file.webkitRelativePath || file.path}
            </div>
          ))}
        </div>
      )}
      <h2>DropzoneJs</h2>
      <Dropzone
        onDrop={(acceptedFiles) => {
          console.log(acceptedFiles);
          setFiles(Array.from(acceptedFiles));
        }}
        getDataTransferItems={(event) => {
          console.log("getDataTransferItems", event);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} webkitdirectory="true" />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
