import LeftWindow from "../components/minesweeper-left"
import MainWindow from "../components/minesweeper-main"
import RightWindow from "../components/minesweeper-right"

export default function game(){
    return(
        <>
        <div className = "flex flex-col lg:flex-row lg:justify-center mt-10 gap-5">
            <div className="flex-1 border border-black p-3">
                <LeftWindow />
            </div>
            <div className="flex-1 border border-black p-3">
                <MainWindow />
            </div>
            <div className="flex-1 border border-black p-3 h-max">
                <RightWindow />
            </div>
        </div>
        </>
    )
}