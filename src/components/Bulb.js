import React from "react";
// 수정할 필요가 없습니다.
const Bulb = (props) => {
    return <div className={props.on ? "bulb-on" : "bulb-off"} />;
};

export  default React.memo(Bulb);