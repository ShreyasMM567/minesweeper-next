"use client";
import { useEffect, useState } from "react";
import Cell from "./Cell";
import {
  Cell as CellType,
  createEmptyBoard,
  plantMines,
  calculateAdjacentMines,
  revealCell,
  toggleFlag,
  checkWin,
  revealAllMines,
} from "../utils/gameLogic";

const Board: React.FC = () => {
  const [board, setBoard] = useState<CellType[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const rows = 10;
  const cols = 10;
  const minesCount = 10;

  const initializeBoard = () => {
    let newBoard = createEmptyBoard(rows, cols, minesCount);
    newBoard = plantMines(newBoard, minesCount);
    newBoard = calculateAdjacentMines(newBoard);
    setBoard(newBoard);
    setGameOver(false);
    setWin(false);
  };

  const handleClick = (cell: CellType) => {
    if (gameOver || win) return;

    let newBoard = [...board];
    newBoard = revealCell(newBoard, cell.x, cell.y);

    if(newBoard[cell.x][cell.y].isMine){
        setGameOver(true);
        newBoard = (revealAllMines(newBoard))
    }
    else if(checkWin(newBoard)){
        setWin(true);
        newBoard = (revealAllMines(newBoard))
    }
    setBoard(newBoard);
  };

  const handleCellRightClick = (e: React.MouseEvent, cell: CellType) => {
    e.preventDefault();
    if(gameOver||win)return;

    let newBoard = [...board];
    newBoard = toggleFlag(newBoard, cell.x, cell.y);
    setBoard(newBoard);
  }

  useEffect(() => {
    initializeBoard()
  }, []);

    return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl font-bold">
        {gameOver ? 'Game Over' : win ? 'You Win!' : 'Keep Going!'}
      </div>
      <div className="grid grid-cols-10 gap-0.5">
        {board.flat().map((cell) => (
          <Cell
            key={`${cell.x}-${cell.y}`}
            cell={cell}
            onClick={() => handleClick(cell)}
            onContextMenu={(e) => handleCellRightClick(e, cell)}
          />
        ))}
      </div>
      {(gameOver || win) && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          onClick={initializeBoard}
        >
          Reset Game
        </button>
      )}
    </div>
  );
};

export default Board;
