import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = <h1 id="heading">Namaste React</h1>;
const multiLineJSX = (
  <div>
    <h1 className="Heading">NAMASTE REACT!!!</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root")); //Returns a JS object
root.render(multiLineJSX); //creates the html tag out of JS object and place it inside root element

//React Functional Components
const HeadingComponent = () => {
  return <h1>Functional Component</h1>;
};
root.render(<HeadingComponent />);
