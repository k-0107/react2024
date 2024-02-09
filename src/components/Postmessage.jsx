import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";

function Postmessage() {
  const [formData, setFormData] = useState({ message: "" });
  const [responseData, setResponseData] = useState({});
  const [error, setError] = useState({});

  const url = "/api/v1/message";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: formData.message }),
  };

  const handleChange = (event) => {
    setFormData({ message: event.target.value });
  };

  const btnClick = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setResponseData(data);
    } catch (e) {
      setError(e);
    }
  };

  console.log(responseData.data);
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          value={formData.message}
          label="メッセージ入力"
          variant="standard"
          onChange={handleChange}
        />
        {/* <input type="text" value={formData.message} onChange={handleChange} /> */}
        <Button
          startIcon={<SendTimeExtensionIcon />}
          variant="contained"
          color="success"
          onClick={btnClick}
          type="button"
        >
          送信
        </Button>
      </Box>
      <h1>メッセージ一覧</h1>
      <p>{JSON.stringify(responseData)}</p>
      <ul>
        {responseData.data &&
          responseData.data.map((item) => (
            <li key={item.id}>{item.message}</li>
          ))}
      </ul>
    </div>
  );
}

export default Postmessage;
