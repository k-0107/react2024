import React, { useState } from "react";

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
      <button onClick={btnClick}>PostAPI</button>
      {responseData ? <p>{JSON.stringify(responseData)}</p> : <p>{error}</p>}
    </div>
  );
}

export default Postapi;
