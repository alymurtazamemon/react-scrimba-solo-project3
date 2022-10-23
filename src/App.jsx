import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import QuestionAnswers from "./components/QuestionAnswers";

function App() {
  const [startGame, setStartGame] = React.useState(false);

  function onStartGameTap() {
    setStartGame(true);
  }
  return <QuestionAnswers />;
  // return startGame ? <QA /> : <Intro handleClick={onStartGameTap} />;
}

export default App;
