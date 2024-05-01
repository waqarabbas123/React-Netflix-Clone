import React from "react";
import ReactDOM from "react-dom/client";
// --------frame works
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// ----------Components
import Home from "./components/Home";
import Card from "./components/Card";
import Question from "./components/Question";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Home></Home>
      <Card></Card>
      <Question></Question>
    </>
  </React.StrictMode>
);
