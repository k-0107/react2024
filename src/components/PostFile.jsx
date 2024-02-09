import React, { useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Postfile() {
  const [selectedFile, setSelectedFile] = useState({});
  const [responseData, setResponseData] = useState({});
  const [error, setError] = useState({});

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const url = "/file";
      const options = {
        method: "POST",
        body: formData,
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setResponseData(data);
      } catch (e) {
        setError(e);
      }
    } else {
      console.log("ファイルが選択されていません。");
    }
  };

  return (
    <div>
      <input
        type="file"
        id="file-upload"
        name="image"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload">
        <Button
          component="span"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
        </Button>
      </label>
      <Button
        variant="outlined"
        type="button"
        onClick={handleUpload}
        sx={{ ml: 2 }}
      >
        アップロード
      </Button>
      {responseData ? <p>{JSON.stringify(responseData)}</p> : <p>{error}</p>}
      <img src={responseData.imageUrl} />
    </div>
  );
}
export default Postfile;
