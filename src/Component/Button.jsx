import ToolPit from "./ToolPit"
import style from "./Button.module.css";
const { useState } = require("react")


const Buttons = ()=>{
    const [position,setPosition] = useState("")
    

    return (
        <>
            <div className={style.main}>
                <div className={style.positionDecider}>
                    <h1>Select the Position</h1>
                    <button className={style.btn} onClick={(e)=>setPosition(e.target.value)} value="top">Top</button>
                    <button className={style.btn} onClick={(e)=>setPosition(e.target.value)} value="left">Left</button>
                    <button className={style.btn} onClick={(e)=>setPosition(e.target.value)} value="right"> Right</button>
                    <button className={style.btn} onClick={(e)=>setPosition(e.target.value)} value="bottom">Bottom</button>
                </div>
                <div className={style.hoverButtonContainer}>
                    <ToolPit position={position}/>
                </div>
            </div>
            
            
        </>
    )
}

export default Buttons;