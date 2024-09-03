import { Cell as CellType } from "../utils/gameLogic";

type CellProps = {
  cell: CellType;
  onClick: () => void;
  onContextMenu: (e: React.MouseEvent) => void;
};

const Cell: React.FC<CellProps> = ({ cell, onClick, onContextMenu }) => {
    
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

  let cellClass =
  "w-8 h-8 border border-gray-600 flex items-center justify-center cursor-pointer ";

if (cell.isRevealed) {
  if (cell.isMine) {
    cellClass += "bg-red-600 text-white";
  } else {
    cellClass += "bg-gray-200";
    if (cell.adjacentMines > 0) {
      cellClass += ` ${getTextColor(cell.adjacentMines)}`;
    }
  }
} else if (cell.isFlagged) {
  cellClass += "bg-yellow-400 text-white"; 
}


  return (
    <div className={cellClass} onClick={onClick} onContextMenu={onContextMenu}>
      {cell.isRevealed && !cell.isMine && cell.adjacentMines > 0
        ? cell.adjacentMines
        : ""}
    </div>
  );
}

export default Cell;
