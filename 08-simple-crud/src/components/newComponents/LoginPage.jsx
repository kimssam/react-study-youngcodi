//LoginPage.jsx

import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";

function LoginPage(){
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    //const {currentUser, setCurrentUser} = useContext(AuthContext);
    const {currentUser, setCurrentUser, logout} = useAuth();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(p=>p.userId == userId && p.password == password)
        if(user){
            setCurrentUser(user); //현재 사용자를 설정
            localStorage.setItem("currentUser", JSON.stringify(user));
            navigate('/posts'); //게시글 목록 페이지로 이동
        }else{
            alert("잘못된 사용자 이름 또는 비밀번호입니다.");
        }
    }

    const handleLogout = ()=>{
        logout();
        navigate("/");
    }

    if(currentUser){
        return (
            <>
                <div>{currentUser.userId}님 로그인 중</div>
                <button onClick={handleLogout}>로그아웃</button>
            </>
        );
    }
    return(
        <div>
            <h1>로그인 페이지</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    사용자 아이디 
                    <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} required/>
                </label>
                <br />
                <label>
                    사용자 비밀번호 
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </label>
                <br />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default LoginPage;