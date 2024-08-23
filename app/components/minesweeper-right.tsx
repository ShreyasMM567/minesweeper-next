export default function RightWindow(){
    return(
        <>
        <div className="flex flex-col gap-10">
            <div>
                <label>Color: </label>
                <input type="color"/>
            </div>
            <div>
                <label>Name:</label>
                <input type = "text" id = "name"/>
            </div>
            <div>
                <label>Difficulty: </label>
                <select>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            </div>
            <div>
                No of mines: 5
            </div>  
        </div>
        </>
    )
}