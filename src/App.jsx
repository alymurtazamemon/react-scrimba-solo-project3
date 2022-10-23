import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import AllQAs from "./components/AllQAs";

function App() {
  const [startGame, setStartGame] = React.useState(false);

  function onStartGameTap() {
    setStartGame(true);
  }
  return <AllQAs />;
  // return startGame ? <AllQAs /> : <Intro handleClick={onStartGameTap} />;
}

export default App;
