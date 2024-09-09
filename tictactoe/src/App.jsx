import { useState } from "react";
import Log from "./components/Log.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  const [ activePlayer, setActivePlayer ] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer=== "X" ? "O" : "X");
    setGameTurns();
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="PLayer 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="PLayer 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare} />
      </div>
      <Log />
    </main>
  );
}

export default App
