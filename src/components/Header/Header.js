import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
      <div className="title">{props.children}</div>
      <div className="scores">
        <div>Score: {props.score} </div>
        <div>Highscore: {props.highscore}</div>
      </div>
    </div>
);

export default Header;