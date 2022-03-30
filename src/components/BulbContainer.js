import { useSelector } from "react-redux";
import Bulb from "./Bulb";
import React from "react";

const BulbContainer = (props) => {
    const bulbCount = useSelector((store) => store.bulbsReducer.count);
    
    return (
        <div className = {props.type+"-bulb-container"} ref = {props.cref}>
            {Array.from({ length: bulbCount }).map(() => (
            <Bulb on={props.type==="on" ? true : false}/>
            ))}
        </div>
    )
}

export default React.memo(BulbContainer);