import React, { useEffect, useState } from "react";

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
      <input type="text" value={formData.message} onChange={handleChange} />
      <button onClick={btnClick} type="submit">
        送信
      </button>
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
