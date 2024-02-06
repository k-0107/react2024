import React from "react";
import Getapi from "./Getapi";
import Postapi from "./Postapi";
import Postmessage from "./Postmessage";
import Postfile from "./Postfile";
import IndexPhotos from "./IndexPhotos";

function App() {
  return (
    <div>
      <Getapi />
      <Postapi />
      <Postmessage />
      <Postfile />
      <IndexPhotos />
    </div>
  );
}

export default App;
