import React from "react";

function Option(props) {
  const styles = props.isSelected
    ? {
        backgroundColor: "#D6DBF5",
        opacity: 1,
        border: "1px solid #D6DBF5",
      }
    : {
        backgroundColor: "transparent",
        border: "1px solid #293264",
      };

  return (
    <button
      className="option"
      onClick={() => props.handleOptionTap(props.index)}
      style={styles}
      // red
      //   style={{ backgroundColor: "#F8BCBC" }}
      // green
      //   style={{
      //     backgroundColor: "#94D7A2",
      //     fontWeight: 500,
      //     opacity: 1,
      //   }}
    >
      {props.text}
    </button>
  );
}

export default Option;
