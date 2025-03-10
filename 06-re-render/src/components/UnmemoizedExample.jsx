//UnmemoizedExample.jsx

import { useState } from "react";

const ExpensiveComponent = ()=>{
    console.log("메모이제이션 적용 안한 계산비용 높은 컴포넌트 랜더링");
    for(let i=0; i<10000000000; i++){}
    return <div>메모이제이션 적용안한 계산비용 높은 컴포넌트</div>
}

const UnmemoizedExample =()=>{
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>
                Count : {count}
            </button>
            <ExpensiveComponent/>
        </div>
    );
}

export default UnmemoizedExample;