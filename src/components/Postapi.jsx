import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";

function Postapi() {
  const url = "/api/v1/message";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Test!!!",
    }),
  };

  const [responseData, setResponseData] = useState({});
  const [error, setError] = useState({});

  const btnClick = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setResponseData(data);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div>
      <Button
        startIcon={<SendTimeExtensionIcon />}
        variant="contained"
        color="success"
        onClick={btnClick}
        sx={{ mt: 2 }}
      >
        PostAPI
      </Button>
      {responseData ? <p>{JSON.stringify(responseData)}</p> : <p>{error}</p>}
    </div>
  );
}

export default Postapi;
