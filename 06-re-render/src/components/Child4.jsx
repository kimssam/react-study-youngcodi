//Child4.jsx

import { memo } from "react";

const style={
    backgroundColor : "beige",
    padding:"10px",
    height:"200px"
}

export const Child4 = memo((props) =>{
    console.log("Child4 자식 랜더링")
    
    return(
        <div style={style}>
            <p>Child4 두번째 자식</p>            
        </div>
    );
});