import React from "react";
import ReactDOM from "react-dom/client";

//Rendering react element inside another react element
const innerElement = <h2>Greetings from React Element</h2>; //React Element - JS object

const outerElement = (
  <div>
    <h1>Namaste React</h1>
    {innerElement}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(outerElement);
