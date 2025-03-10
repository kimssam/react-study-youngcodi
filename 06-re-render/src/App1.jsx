import logo from './logo.svg';
import './App.css';
import { useState, memo } from 'react';
import {Child1} from "./components/Child1";
import { Child4 } from './components/Child4';
import { useCallback } from 'react';

export const App= memo(() => {
  console.log("App 랜더링")

  const [num, setNum] = useState(0)

  const onClickButton = () =>{
    setNum(num+1)
  }
  const onClickReset = useCallback(()=>{
    setNum(0)
  },[]);
  //의존 배열이 비어있으면 함수는 처음 작성된 것을 재사용한다!!
  
  return (
    <>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset}/>
      <Child4/>
    </>
  );
});

export default App;
