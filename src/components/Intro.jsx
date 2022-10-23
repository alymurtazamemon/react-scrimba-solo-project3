import React from "react";
import blob1 from "../assets/blobs1.png";
import blob2 from "../assets/blobs2.png";

function Intro() {
  return (
    <div className="intro">
      <img src={blob1} className="blob1"></img>
      <h1>Quizzical</h1>
      <p>A Trivia App</p>
      <button>Start Quiz</button>
      <img src={blob2} className="blob2"></img>
    </div>
  );
}

export default Intro;
