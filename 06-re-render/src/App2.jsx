import logo from './logo.svg';
import './App.css';
import { useState, memo, useMemo } from 'react';
import {Child1} from "./components/Child1";
import { Child4 } from './components/Child4';
import { useCallback } from 'react';

export const App= memo(() => {
  console.log("App2 랜더링")

  const [num, setNum] = useState(0)
  const [light, setLight] = useState("전등 켜짐")

  const onToggleButton = () =>{
      if(light=="전등 켜짐") setLight("전등 꺼짐")
      else setLight("전등 켜짐")
  }

  const complexValue = useMemo(()=>{
    console.log("복잡한 수식 재랜더링");
    return num*num*num;
  },[num])

  const increaseButton =()=>{
    setNum(num+100)
  }
  
  //의존 배열이 비어있으면 함수는 처음 작성된 것을 재사용한다!!
  
  return (
    <>
      <button onClick={onToggleButton}>전등 스위치</button>
      <p>{light}</p>
      <mark>복잡한 값 : {complexValue}</mark><br />
      <button onClick={increaseButton}>num변수값을 증가시키는 버튼</button>
      <p>num변수의 값 : {num}</p>
    </>
  );
});

export default App;
