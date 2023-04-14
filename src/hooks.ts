import { useEffect, useState } from 'react';
import { BASE_GAME_BOARD } from './helpers';

export enum GameStatus {
  Stopped = 'stopped',
  Running = 'running'
}

let gameLoopInterval: ReturnType<typeof setInterval> | undefined;

export const useGameLoop = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Stopped);
  const [generationCount, setGenerationCount] = useState<number>(0);

  useEffect(() => {
    if (gameStatus === GameStatus.Running) {
      gameLoopInterval = setInterval(() => setGenerationCount(count => count + 1), 200);
    }

    return () => clearInterval(gameLoopInterval);
  }, [gameStatus]);

  return { generationCount, setGameStatus };
};

enum GameCellStatus {
  EMPTY = 0,
  NEW = 1,
  OLD = 2,
}

type GameBoardState = GameCellStatus[][];

export const useGameBoard = () => {
  const [gameBoard, setGameBoard] = useState<GameBoardState>(BASE_GAME_BOARD);

  const resetGameBoard = () => setGameBoard(BASE_GAME_BOARD);

  return { gameBoard, resetGameBoard };
}