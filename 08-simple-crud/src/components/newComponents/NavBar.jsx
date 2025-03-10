//NavBar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "./AuthContext";

const NavBar= () =>{
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

    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">홈</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/login" className="navbar-link">로그인</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/join" className="navbar-link">회원가입</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/memberList" className="navbar-link">회원목록</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/posts" className="navbar-link">게시글 목록</Link>
                </li>

                {currentUser ? (
                    <li className="navbar-item" style={{marginLeft:"auto"}}>
                        <span>{currentUser.userId}님 로그인 중</span>&nbsp;&nbsp;
                        <button onClick={handleLogout}>로그아웃</button>
                    </li>
                    ) : (
                    <li className="navbar-item" style={{marginLeft:"auto"}}>
                        <Link to="/login">
                            <button onClick={handleLogout}>로그인</button>
                        </Link>
                    </li>
                )}


            </ul>
        </nav>
    );
}

export default NavBar;

