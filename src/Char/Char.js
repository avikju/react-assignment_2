import React from "react";
import "./Char.css";

const Char = (props) => {
  return <div className="char_box" onClick={props.clicked}>{props.eachChar}</div>;
};
export default Char;
