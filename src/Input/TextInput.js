import React from "react";
import "./TextInput.css";

const TextInput = (props) => {
  return (
    <div>
      <textarea
        className="box"
        type="text"
        onChange={props.changed}
        value={props.text}
      />
      <div className="charcount_display">{props.charCount} characters</div>
    </div>
  );
};
export default TextInput;
