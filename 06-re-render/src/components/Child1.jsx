//Child1.jsx

import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
import { memo } from 'react';

const style={
    backgroundColor : "lightblue",
    padding:"10px",
    height:"200px"
}

export const Child1 = memo((props) =>{
    console.log("Child1 자식 랜더링")

    const {onClickReset} = props;
    return(
        <div style={style}>
            <p>Child1 첫번째 자식</p>
            <button onClick={onClickReset}>리셋</button>
            <Child2/>
            <Child3/>
        </div>
    );
});