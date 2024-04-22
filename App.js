import React from "react";
import ReactDOM from "react-dom/client";

//Rendering React Component inside a React element
const InnerComponent = () => (
  <h2>Greetings from React Component</h2> //React Element - JS object
);

const outerElement = (
  <div>
    <h1>Namaste React</h1>
    <InnerComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(outerElement);
