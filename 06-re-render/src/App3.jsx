import { useState } from "react";
import UnmemoizedExample from "./components/UnmemoizedExample";
import MemoizedExample from "./components/MemoizedExample";

//App3.jsx
const App =()=>{

    const[showUnmemoized, setShowUnmemoized] = useState(true)

    return(
        <div>
            <button onClick={()=>setShowUnmemoized(!showUnmemoized)}>
                {showUnmemoized ? "메모이제이션 적용 전" : "메모이제이션 적용 후"}
            </button>
            {showUnmemoized ? <UnmemoizedExample/> : <MemoizedExample/>}
        </div>
    );
}
export default App;