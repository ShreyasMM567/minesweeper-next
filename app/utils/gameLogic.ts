export type Cell = {
    x: number,
    y: number,
    isMine: boolean,
    isRevealed: boolean,
    isFlagged: boolean,
    adjacentMines: number
}

export const createEmptyBoard = (rows: number, cols: number, mines: number): Cell[][] => {
    const board: Cell[][] = [];
    for (let r = 0 ; r < rows; r++){
        const row: Cell[] = [];
        for (let c = 0 ; c < cols ; c++){
            row.push({
                x:r,
                y:c,
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                adjacentMines: 0
            });
        }
        board.push(row);
    }
    return board;
};

export const plantMines = (board: Cell[][], totalMines: number): Cell[][] => {
    const rows = board.length;
    const cols = board[0].length;
    let minesPlaced = 0;

    while(minesPlaced < totalMines){
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        if(!board[r][c].isMine){
            board[r][c].isMine = true;
            minesPlaced++;
        }
    }

    return board;
};

export const getAdjacentCells = (board: Cell[][], row: number, col: number): Cell[] => {
    const adjacent: Cell[] = [];
    const rows = board.length;
    const cols = board[0].length;

    for (let r = row - 1; r <= row + 1; r++){
        for(let c = col - 1; c <= col + 1; c++){
            if (r >= 0 && r < rows && c >= 0 && c < cols && !(r === row && c === col)){
                adjacent.push(board[r][c]);
            }
        }
    }
    return adjacent;
};

export const calculateAdjacentMines = (board: Cell[][]): Cell[][] => {
    board.forEach((row) => {
        row.forEach((cell) => {
            if(!cell.isMine){
                const adjacent = getAdjacentCells(board, cell.x, cell.y);
                cell.adjacentMines = adjacent.filter((c) => c.isMine).length;
            }
        });
    });
    return board;
}

export const revealCell = (board: Cell[][], row: number, col: number): Cell[][] => {
    const cell = board[row][col];
    if (cell.isRevealed || cell.isFlagged) return board;

    cell.isRevealed = true;
    if (cell.adjacentMines === 0 && !cell.isMine) {
        const adjacent = getAdjacentCells(board, row, col);
        adjacent.forEach((adjCell) => {
            if (!adjCell.isRevealed && !adjCell.isFlagged) {
                board = revealCell(board, adjCell.x, adjCell.y); // Recursively reveal adjacent cells
            }
        });
    }
    return board;
};

export const toggleFlag = (board: Cell[][], row: number, col: number): Cell[][] => {
    const cell = board[row][col];
    if(cell.isRevealed) return board;
    cell.isFlagged = !cell.isFlagged;
    return board;
};

export const checkWin = (board: Cell[][]): boolean => {
    for (let row of board){
        for(let cell of row){
            if(!cell.isMine && !cell.isRevealed){
                return false;
            }
        }
    }
    return true;
};

export const revealAllMines = (board: Cell[][]): Cell[][] => {
    board.forEach((row) => {
        row.forEach((cell) => {
            if(cell.isMine){
                cell.isRevealed = true;
            }
        })
    })
    return board;
}

