"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import LeftWindow from "../components/minesweeper-left"

import RightWindow from "../components/minesweeper-right"

const MainWindow = dynamic(() => import("../components/minesweeper-main"), {
    ssr: false,
    loading: () => <p>Loading game...</p>
})

export default function Game(){
    const [numberOfMines, setNumberOfMines] = useState<number>(10);
    return(
        <>
        <div className = "flex flex-col lg:flex-row lg:justify-center mt-10 gap-5">
            <div className="flex-1 border border-black p-3 h-max">
                <LeftWindow />
            </div>
            <div className="flex-1 border border-black p-3 h-max">
                <MainWindow />
            </div>
            <div className="flex-1 border border-black p-3 h-max">
                <RightWindow />
            </div>
        </div>
        </>
    )
}