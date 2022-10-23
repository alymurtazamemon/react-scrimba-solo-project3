import React from "react";

function ActionButton(props) {
  return (
    <button className="action-button" onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

export default ActionButton;
