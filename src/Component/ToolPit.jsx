import { useState } from "react";
import style from "./ToolTip.module.css";
 
const ToolPit = ({position})=>{
    const [showTooltip,setShowTooltip] = useState(false);

    const handleMouseEnter = ()=>{
        setShowTooltip(true)
    }
    const handleMouseLeave= ()=>{
        setShowTooltip(false)
    }

    return(
        <>
            <div className={style.toolpitContainer}>
                <button id={style.hoverBtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >HOVER ON ME</button>
                {showTooltip && position &&(
                    <p className={position === 'bottom' ? style.bottom  : position === 'top' ? style.top : 
                        position === 'left' ? style.left : position === 'right' ? style.right : ''}>
                    Thanks for hovering from {position}. I am Tooltip.
                    </p>)
                }
                
            </div>
        </>
    )
}

export default ToolPit;