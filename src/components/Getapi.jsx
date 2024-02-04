import React, { useState } from "react";

function Getapi() {
  const [data, setData] = useState({});

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
      <button onClick={handleButtonClick}>API取得</button>
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
