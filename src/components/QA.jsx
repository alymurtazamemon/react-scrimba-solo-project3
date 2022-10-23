import React from "react";
import Option from "./Option";

function QA(props) {
  const [options, setOptions] = React.useState(props.options);

  const optionsElement = options.map((option, index) => {
    return (
      <Option
        key={index}
        index={index}
        text={option.text}
        isSelected={option.isSelected}
        handleOptionTap={onOptionTap}
      />
    );
  });

  function onOptionTap(index) {
    setOptions((prevValue) => {
      return prevValue.map((option, mapIndex) => {
        return mapIndex === index
          ? { ...option, isSelected: !option.isSelected }
          : { ...option, isSelected: false };
      });
    });
  }

  return (
    <div>
      <h3 className="question">{props.question}</h3>
      <div className="options">{optionsElement}</div>
      <hr />
    </div>
  );
}

export default QA;
