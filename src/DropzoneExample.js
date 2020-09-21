import React from "react";
import Dropzone from "react-dropzone";

export default function DropzoneExample() {
  return (
    <Dropzone
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
      //getDataTransferItems={(event) => console.log(event)}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
}
