import React from 'react';
import { GameStatus, useGameLoop } from './hooks';

function GameBoard() {
  const { generationCount, setGameStatus } = useGameLoop();

  return (
    <div>
      <h1>hi {`${generationCount}`}</h1>
      <button onClick={() => setGameStatus(GameStatus.Running)}>Start</button>
      <button onClick={() => setGameStatus(GameStatus.Stopped)}>Stop</button>
    </div>
  )
}

export default GameBoard