import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello World from React"); //Creates JS Object
const root = ReactDOM.createRoot(document.getElementById("root")); //Returns a JS object
root.render(heading); //creates the html tag out of JS object and place it inside root element

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);
