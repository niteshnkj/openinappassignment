import React, { useState } from "react";
import excelicon from "../assets/excel.svg";
import uploadingicon from "../assets/uploading.svg";
import uploadicon from "../assets/upload.svg";
import Uploads from "./Uploads";
import { parse } from "papaparse";

const UploadContainer = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showUploads, setShowUploads] = useState(false);
  const [exceldata, setExcelData] = useState([]);

  const handleFileSelection = (file) => {
    Array.from(file).forEach(async (singleFile) => {
      let text = await singleFile.text();
      let result = parse(text, { header: true });
      setExcelData(result.data);
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files);
    handleFileSelection(e.target.files);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setShowUploads(false);
      setUploading(true);
      setTimeout(() => {
        setSelectedFile(null);
        setUploading(false);
        setShowUploads(true);
      }, 2000);
    } else {
      alert("No file selected");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    setSelectedFile(droppedFiles);
    handleFileSelection(droppedFiles);
  };
  // console.log(exceldata);
  return (
    <>
      <div 
        className="flex flex-col items-center align-middle justify-center gap-4 rounded-lg h-[352px] md:h-[367px] w-[328px] md:w-[596px] bg-white"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="w-[296px] md:w-[564px] h-[258px] border-2 border-dashed border-[#EBEBEB] rounded flex justify-center items-center align-middle">
          <div className="flex flex-col items-center gap-6">
            <>
              <img src={excelicon} alt="" />
            </>
            <div className="flex gap-1 font-montserrat ">
              <p className="text-[#999CA0] hidden md:block">
                {selectedFile
                  ? `${selectedFile[0].name}`
                  : "Drop your excel sheet here or "}
              </p>
              <p className="text-[#999CA0] block md:hidden">
                {selectedFile
                  ? `${selectedFile[0].name}`
                  : "Upload your excel sheet"}
              </p>

              {!selectedFile && (
                <>
                  <label
                    htmlFor="fileInput"
                    className="text-[#605BFF] hidden md:block"
                  >
                    browse
                  </label>
                  <label
                    htmlFor="fileInput"
                    className="text-[#605BFF] md:hidden"
                  >
                    here
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    accept=".xls, .xlsx, .csv"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </>
              )}
            </div>

            {selectedFile && (
              <>
                <button onClick={handleRemoveFile} className="text-[#D33030]">
                  Remove
                </button>
              </>
            )}
          </div>
        </div>
        <>
          <button
            onClick={handleUpload}
            className="bg-[#605BFF] h-[46px] md:h-[56px] w-[296px] md:w-[564px] rounded-lg"
            style={{ opacity: showUploads ? 0.5 : 1 }}
          >
            {uploading ? (
              <div className="flex items-center align-middle justify-center ">
                <img src={uploadingicon} alt="" />
              </div>
            ) : (
              <div className="flex gap-1 items-center align-middle justify-center ">
                <img src={uploadicon} alt="" />
                <p className="text-white">Upload</p>
              </div>
            )}
          </button>
        </>
      </div>
      {showUploads && exceldata.length > 0 && (
        <div className="self-start pt-32">
          <div className="font-figtree w-[1065px] h-[497px] flex flex-col gap-8 ">
            <p className="text-black text-2xl font-semibold">Uploads</p>
            <div className="w-[1065px] h-auto  flex justify-center align-middle bg-[#F5F5F5] rounded-lg">
              <table>
                <thead className="w-[1065px] h-[56px] text-[14px] leading-6">
                  <tr className=" px-6 rounded-lg w-[1034px] h-[58px] grid grid-cols-12 place-items-start place-content-center">
                    <th className="col-start-1 col-span-2 ">Sl No.</th>
                    <th className="col-start-3 col-span-2 ">Links</th>
                    <th className="col-start-5 col-span-2 ">Prefix</th>
                    <th className="col-start-7 col-span-2 ">Add Tags</th>
                    <th className="col-start-9 col-span-4 ">Selected Tags</th>
                  </tr>
                </thead>
                {exceldata.map((item, index) => (
                  <div key={index}>
                    <Uploads data={item} />
                  </div>
                ))}
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadContainer;
