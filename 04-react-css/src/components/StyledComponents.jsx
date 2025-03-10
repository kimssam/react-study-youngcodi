//StyledComponents.jsx : 가장 큰 인기를 얻고 있어 많이 채용됨
//npm install styled-components 명령어로 설치

import styled from "styled-components";

export const StyledComponents = () =>{
    return (
        <SContainer>
            <STitle>styled-components 입니다.</STitle>
            <SButton>버튼</SButton>
        </SContainer>
    );
}

const SContainer = styled.div`
    border:1px solid gray;
    padding:8px;
    margin:8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
`;

const STitle = styled.p`
    color:gray;
    font-size:1.5em;
`;

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