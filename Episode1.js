import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1",{id:"heading"},"Im H1 Tag");
// const heading =<div id="container"> Im div  <h1 id="heading">I'm h1 Tag</h1></div>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const Heading = () => (
  <div id="container">
    {" "}
    Im div <h1 id="heading">I'm h1 Tag</h1>
  </div>
);
console.log(childDiv);

var childDiv = (
  <div id="container2" className="test">
    {" "}
    Im another div
    <Heading />
    <h1 id="heading2">I'm another h1 Tag</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(childDiv);

let b = 20;
var c = 120;
if (true) {
  a = 100;

  console.log(a);
  console.log(c);
}
console.log(a);
console.log(c);
