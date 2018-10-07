import React from "react";

const NavBar = ({ score, highScore, message }) => {
  console.log(message);
  return (
    <nav className="navbar navbar-expand-md fixed-top justify-content-center">
      <h2 className="header">
        <a className="brand" href="/">
          Clicky Game
        </a>
      </h2>
      <span className="msg">
        <h3>{message}</h3>
      </span>

      <span className="score">
        Score:
        <span className="badge badge-pill badge-secondary"> {score}</span>
        <span className="highScore">Top Score:</span>
        <span className="badge badge-pill badge-secondary"> {highScore}</span>
      </span>
    </nav>
  );
};

export default NavBar;
