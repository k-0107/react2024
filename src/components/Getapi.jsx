import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Getapi() {
  const [data, setData] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch("/api/v1/");
      const json = await response.json();
      setData(json);
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={handleButtonClick}
        sx={{ mt: 2 }}
      >
        API取得
      </Button>
      {data && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(data)}</pre>
          <p>
            APIは
            {data.version
              ? `${Object.keys(data.version)[0]}のバージョン${
                  data.version["photo-project"]
                }です`
              : "データがありません"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Getapi;
