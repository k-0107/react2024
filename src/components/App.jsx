import React from "react";
import Getapi from "./Getapi";
import Postapi from "./Postapi";
import Postmessage from "./Postmessage";
import Postfile from "./Postfile";

function App() {
  return (
    <div>
      <Getapi />
      <Postapi />
      <Postmessage />
      <Postfile />
    </div>
  );
}

export default App;
