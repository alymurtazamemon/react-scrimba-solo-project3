import React from "react";
import Option from "./Option";

function QA(props) {
  const optionsElement = props.options.map((option, index) => {
    return (
      <Option
        key={index}
        index={index}
        text={option.text}
        isSelected={option.isSelected}
        handleOptionTap={(index) => props.handleOptionClick(index)}
        isCorrectAnswer={option.isCorrectAnswer}
        checkAnswer={props.checkAnswer}
        isCorrect={props.isCorrect}
      />
    );
  });

  return (
    <div>
      <h3 className="question">{props.question}</h3>
      <div className="options">{optionsElement}</div>
      <hr />
    </div>
  );
}

export default QA;
