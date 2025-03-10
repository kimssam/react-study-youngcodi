//useMemoList.ts

import { useCallback } from "react"
import { useState } from 'react';


export const useMemoList = () =>{
     //메모 목록 상태변수
    const [memos, setMemos] = useState<string[]>([]);

    //메모 추가 로직
    const addTodo = useCallback((text: string)=>{
        const newMemos = [...memos];
        //새로 입력한 문자열을 메모 배열에 추가
        newMemos.push(text)
        setMemos(newMemos)
        },[memos]);

    //메모 삭제 로직
    const deleteTodo = useCallback((index:number)=>{
        const newMemos = [...memos]
        newMemos.splice(index,1)
        setMemos(newMemos)
        },[memos])
    
    return {memos, addTodo, deleteTodo};
}