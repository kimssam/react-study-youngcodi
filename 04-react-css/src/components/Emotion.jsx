//Emotion.jsx
//라이브러리 설치 npm install @emotion/react @emotion/styled
/** @jsxImportSource @emotion/react */ 
import {css} from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () =>{
    //1)StyledComponent와 비슷한 방법 :scss문법 사용가능
    const containerStyle = css`
        border:1px solid gray;
        padding:8px;
        margin:8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 20px;
    `;
    //2)인라인 스타일 방법
    const titleStyle = css({
        color:"gray",
        fontSize:"1.5em"
    });
    //3)StyledComponent 작성방법과 유사 => @emotion/styled 를 별도로 import
    const SButton = styled.button`
        background-color: lightgray;
        border:none;
        padding:10px;
        border-radius: 8px;
        &:hover{
            background-color: darkgray;
            cursor: pointer;
            color:white;
        }
    `;
    return (
        <div css={containerStyle}>
            <p css={titleStyle}>Emotion입니다.</p>
            <SButton>버튼</SButton>
        </div>
    );
}