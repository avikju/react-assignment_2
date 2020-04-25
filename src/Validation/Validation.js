import React from "react";
import "./Validation.css";

const Validation = (props) => {
  if (props.length <= 5 && props.length !== 0)
    return <div className="validation">Too Short</div>;
  else if (props.length > 10) return <div className="validation">Too Long</div>;
  else return null;
};
export default Validation;
