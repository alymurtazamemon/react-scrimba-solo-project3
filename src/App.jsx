import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import QA from "./components/QA";

function App() {
  const [startGame, setStartGame] = React.useState(false);

  return startGame ? <QA /> : <Intro />;
}

export default App;
