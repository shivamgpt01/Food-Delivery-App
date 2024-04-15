import React from "react";
import ReactDOM from "react-dom/client";

//Component Composition - Rendering one component inside another
const prize = 1000;
const TitleComponent = () => {
  return <h2>Greetings from React functional component</h2>;
};

const HeadingComponent = () => {
  return (
    <div>
      <h1>Namaste React</h1>
      <TitleComponent />
      <h3>You have won a prize of {prize} dollars!!!</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
