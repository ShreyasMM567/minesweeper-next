import { Cell as CellType } from "../utils/gameLogic";

type CellProps = {
  cell: CellType;
  onClick: () => void;
  onContextMenu: (e: React.MouseEvent) => void;
  gameOver: boolean;
};

const Cell: React.FC<CellProps> = ({ cell, onClick, onContextMenu, gameOver }) => {
  
  let cellBg = 'bg-blue-500';
  let textColor = '';

  const getTextColor = (adjacentMines: number) => {
    switch (adjacentMines) {
      case 1:
        return "text-blue-500";
      case 2:
        return "text-green-500";
      case 3:
        return "text-red-500";
      case 4:
        return "text-purple-500";
      case 5:
        return "text-pink-500";
      case 6:
        return "text-teal-500";
      default:
        return "text-black";
    }
  };
  
  
if (cell.isRevealed) {
  if (cell.isMine) {
    cellBg = "bg-red-600 text-white";
  } else {
    cellBg = "bg-gray-300";
    if (cell.adjacentMines > 0) {
      textColor = ` ${getTextColor(cell.adjacentMines)}`;
    }
  }
} else if (cell.isFlagged) {
  cellBg = "bg-yellow-400";
  textColor = "text-white" 
}

let cellClass =
  `w-8 h-8 rounded-sm flex items-center justify-center ${!gameOver?'cursor-pointer':''} ${cellBg} ${textColor}`;

  return (
    <div className={cellClass} onClick={onClick} onContextMenu={onContextMenu}>
      {cell.isRevealed && !cell.isMine && cell.adjacentMines > 0
        ? cell.adjacentMines
        : ""}
    </div>
  );
}

export default Cell;
