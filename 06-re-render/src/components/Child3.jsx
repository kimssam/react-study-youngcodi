//Child3.jsx

import { memo } from "react";

const style={
    backgroundColor : "lightgray",
    padding:"10px",
    height:"50px"
}

export const Child3 = memo((props) =>{
    console.log("Child3 손녀 랜더링")

    return(
        <div style={style}>
            <p>Child3 손녀</p>
        </div>
    );
});