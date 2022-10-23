import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import QA from "./components/QA";

function App() {
  const [startGame, setStartGame] = React.useState(false);

  function onStartGameTap() {
    setStartGame(true);
  }

  return startGame ? <QA /> : <Intro handleClick={onStartGameTap} />;
}

export default App;
