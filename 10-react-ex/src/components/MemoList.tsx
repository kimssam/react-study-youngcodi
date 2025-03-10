//MemoList.tsx
import { FC } from 'react';
import { styled } from 'styled-components';

type Props ={
    memos : string[];
    onClickDelete : (index:number)=>void;
}

export const MemoList:FC<Props> = (props)=>{
    const {memos, onClickDelete} = props;
    return(
        <SContainer>
        <p>메모 목록</p>
        <ul>
          {memos.map((memo, index) => (
              <li key={memo}>
                <SMemoWrapper>
                  <p>{memo}</p>
                  <SButton onClick={()=>onClickDelete(index)}>삭제</SButton>
                </SMemoWrapper>
              </li>
            ))
          }
        </ul>
      </SContainer>
    );
}

const SButton = styled.button`
  margin-left:15px;
`
const SContainer = styled.div`
  border:1px solid gray;
  padding:15px;
`
const SMemoWrapper = styled.div`
  display:flex;
  align-items:center;
`