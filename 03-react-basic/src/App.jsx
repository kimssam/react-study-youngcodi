import { Fragment, useEffect, useState } from "react";
import "./app.css";
import { ReactDOM } from 'react-dom';
import  ColoredMessage  from "./components/ColoredMessage";
//import {컴포넌트명} 방식은 normal export시 사용하는 import방식은 컴포넌트명을 정확하게 사용해야 한다.
//import 컴포넌트명 방식은 default export시 사용하는 import방식

export const App = () =>{
    //state 정의
    const [num,setNum]=useState(0);

    const [opinion, setOpinion] = useState('나의 의견')

    const [hateNum, setHateNum] = useState(0)

    const onClickButton = ()=>{
        //alert("버튼 클릭됨")
        setNum(num+1)
    }
    const agreeButton = () =>{
        if(opinion=='나의 의견') setOpinion('찬성')
        else setOpinion(opinion=='찬성' ? '반대' : '찬성')
    }
    const hateButton = () =>{
        setHateNum(hateNum+1)
    }


    useEffect(()=>{
        alert("당신의 의견을 제출해주셔서 감사합니다!")
    },[num, hateNum])
    // useEffect()메소드의 두번째 매개변수로 빈 배열[]을 넣으면 마운팅시에만 호출된다.
    
    return (
        <>
            {console.log("test")}
            <h1 style={{fontSize:"50px",color:"red"}}>hello~React!</h1>
            <ColoredMessage color="blue">반갑다. 리액트!</ColoredMessage>
            <ColoredMessage color="pink">리액트! 널 정복하겠어!</ColoredMessage>
            <mark>JSX의 중요한 규칙 중 하나는 return 이후는 한 개의 태그로 감싸야 한다!!</mark>
            <button onClick={onClickButton}>좋아요 버튼</button>
            <h1>👍{num}</h1>
            <button onClick={agreeButton}>찬성/반대 투표</button>
            <h1>{opinion}</h1>
            <button onClick={hateButton} className="hateBtn" style={{fontSize:"2em", padding:"10px"}}>👎{hateNum}</button>
        </>
);
}