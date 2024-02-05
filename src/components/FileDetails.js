import React from "react";

const FileDetails = ({ fileName, selectedTags }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">File Details</h2>
      <p>
        <strong>File Name:</strong> {fileName}
      </p>
      <p>
        <strong>Selected Tags:</strong>{" "}
        {selectedTags.length > 0
          ? selectedTags.map((tag, index) => (
              <span key={index} className="mr-2">
                {tag}
              </span>
            ))
          : "No tags selected"}
      </p>
    </div>
  );
};

export default FileDetails;
