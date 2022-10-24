import React from "react";

function Option(props) {
  const correctAnswerStyle = {
    backgroundColor: "#94D7A2",
    fontWeight: 500,
    opacity: 1,
    border: "1px solid #94D7A2",
  };
  const wrongAnswerStyle = {
    backgroundColor: "#F8BCBC",
    border: "1px solid #F8BCBC",
    opacity: 0.5,
  };

  const selectAnswerStyle = {
    backgroundColor: "#D6DBF5",
    opacity: 1,
    border: "1px solid #D6DBF5",
  };

  const styles = props.isSelected
    ? props.checkAnswer
      ? props.isCorrect
        ? correctAnswerStyle
        : wrongAnswerStyle
      : selectAnswerStyle
    : props.checkAnswer && props.isCorrectAnswer
    ? correctAnswerStyle
    : {
        backgroundColor: "transparent",
        border: "1px solid #293264",
        opacity: props.checkAnswer ? 0.5 : 1,
      };

  return (
    <button
      className="option"
      onClick={() => props.handleOptionTap(props.index)}
      style={styles}
    >
      {props.text}
    </button>
  );
}

export default Option;
