import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import {MemoList} from "./MemoList";
import { useMemoList } from '../hooks/useMemoList';

const App: FC = ()=> {
  //사용자 정의 훅을 이용하여 변수와 함수 얻기
  const {memos, addTodo, deleteTodo} = useMemoList();
  
  //텍스트 박스 상태변수
  const [text, setText] = useState<string>("");
  

  //텍스트 박스 입력시 입력 내용을 state에 설정
  const onChangeText = (e:ChangeEvent<HTMLInputElement>)=>{setText(e.target.value)}

  //추가 버튼 클릭시 동작구문
  const onClickAdd = () =>{
    addTodo(text);
    setText("")
  }

  //삭제 버튼 클릭시 동작구문
  const onClickDelete = useCallback((index:number) =>{
    deleteTodo(index);
  },[deleteTodo]);

  return (
    <div className="App">
      <h1>간단 메모 애플리케이션</h1>
      <input type="text" value={text} onChange={onChangeText}/>
      <button onClick={onClickAdd}>추가</button>
      <MemoList memos={memos} onClickDelete={onClickDelete}/>
      
    </div>
  );
}

export default App;
