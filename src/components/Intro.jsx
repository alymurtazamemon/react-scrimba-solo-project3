import React from "react";

function Intro(props) {
  return (
    <section className="intro">
      <h1>Quizzical</h1>
      <p>A Trivia App</p>
      <button onClick={props.handleClick}>Start Quiz</button>
    </section>
  );
}

export default Intro;
