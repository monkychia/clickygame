import React from "react";
import "./jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid banner">
      <div className="container jumboText">
        <h1 className="display-4 name">Clicky Game!</h1>
        <p className="lead">
          Click on an image to earn points, but don't click the same one twice!
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
