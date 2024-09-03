import Board from "./Board";

export default function MainWindow() {
    // type Cell = {
    //   cellNo: number,
    //   content: string
    // }
  
    // const generateCells = (rows: number, cols: number): Cell[] => {
    //   const cells = [];
    //   let id = 1;
    //   for (let row = 1; row <= rows; row++) {
    //     for (let col = 1; col <= cols; col++) {
    //       cells.push({ cellNo: id++, content: `Cell-${id - 1}` });
    //     }
    //   }
    //   return cells;
    // }
    // const cells = generateCells(6, 5);  
  
    // return (
    //   <>
    //     <div className="overflow-x-auto flex-col">
    //       <div className="flex justify-around pb-4">
    //         <div>time</div>
    //         <div>flags</div>
    //         <div>mines</div>
    //       </div>
    //       <div
    //         className="grid grid-cols-5 gap-[2px] p-1 style={{ gridAutoRows: '1fr' }">
    //         {cells.map(({ cellNo, content }) => (
    //           <div
    //             key={cellNo}
    //             id={content}
    //             className="lg:h-20 h-16 bg-blue-500 flex items-center justify-center text-white font-bold rounded-[4px] hover:cursor-pointer hover:bg-blue-600 active:bg-blue-700 active:scale-95">
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </>
    // );

    return(
      <Board />
    )
  }