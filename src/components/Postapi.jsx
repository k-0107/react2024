import React, { useEffect } from "react";

function Postapi() {
  const url = "/api/v1/message";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Test!!!",
    }),
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
      } catch (e) {
        return e;
      }
    };
    getData();
  }, []);
  return;
}

export default Postapi;
