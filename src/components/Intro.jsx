import React from "react";
import ActionButton from "./ActionButton";

function Intro(props) {
  return (
    <section className="intro">
      <h1>Quizzical</h1>
      <p>A Trivia App</p>
      <ActionButton text="Start Quiz" handleClick={props.handleClick} />
    </section>
  );
}

export default Intro;
