//Child2.jsx

import { memo } from "react";

const style={
    backgroundColor : "lightgray",
    padding:"10px",
    height:"50px",
    marginBottom:"5px"

}

export const Child2 = memo((props) =>{
    console.log("Child2 손자 랜더링")

    return(
        <div style={style}>
            <p>Child2 손자</p>
        </div>
    );
})