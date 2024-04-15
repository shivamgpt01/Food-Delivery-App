import React from "react";
import ReactDOM from "react-dom/client";

//Rendering react element inside component
const prize = 1000;
const title = <h2>Greetings from React Element</h2>; //React Element - JS object

const HeadingComponent = () => {
  return (
    <div>
      <h1>Namaste React</h1>
      {title}
      <h3>You have won a prize of {prize} dollars!!!</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
