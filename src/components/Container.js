import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import BulbContainer from "./BulbContainer";
import {
  increment,
  decrement
} from "../store/modules/bulbsReducer";

import "../styles.css";

const Container = () => {
  const onBulbContainerRef = useRef();
  const offBulbContainerRef = useRef();
  const dispatch = useDispatch();
  
  useEffect(() => { 
    onBulbContainerRef.current.style.transform = "translate(-100%, 0%)";
  }, []);

  const lightSwitch = () => {
    [onBulbContainerRef.current.style.transform, offBulbContainerRef.current.style.transform] 
    = [offBulbContainerRef.current.style.transform, onBulbContainerRef.current.style.transform];
  }

  const addBulbs = () => dispatch(increment())
  const reduceBulbs = () => dispatch(decrement())

  return (
    <>
      <button onClick={lightSwitch}>On/off</button>
      <button onClick={addBulbs}>Add bulb</button>
      <button onClick={reduceBulbs}>Reduce bulb</button>

      <div className="bulbs">
        <BulbContainer type={"off"} cref = {offBulbContainerRef}/>
        <BulbContainer type={"on"} cref = {onBulbContainerRef}/>
      </div>
    </>
  );
};

export default Container;
