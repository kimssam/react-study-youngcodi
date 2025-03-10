import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'; // 외부 CSS 파일을 import 합니다.
import { useAuth } from './AuthContext3';

function NavBar() {
  //☆3-11)[여기부터]
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, logout } = useAuth(); 
 
  const handleSubmit = (e) => {
   e.preventDefault();
   const users = JSON.parse(localStorage.getItem('users')) || [];
   const user = users.find(p=>p.userId == userId && p.password == password )
   

   if (user) { 
     setCurrentUser(user); 
     localStorage.setItem('currentUser', JSON.stringify(user)); 
     navigate('/posts'); 
   } else {
     alert('잘못된 사용자 이름 또는 비밀번호입니다.');
   }
 };
 
 const handleLogout = () => {
   logout();
   navigate('/'); // 로그아웃 후 홈 페이지로 이동
 };
//☆3-11)[여기까지] 넣기

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">홈</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">로그인</Link>
        </li>
        <li className="navbar-item">
          <Link to="/join" className="navbar-link">회원 가입</Link>
        </li>

        {/* ☆3-13) admin만 회원목록 보이도록 수정 =>4단계)본인 쓴 글만 수정, 삭제 가능하도록 수정=>PostListPage4*/}
        {currentUser?.userId === "admin" && (
        <li className="navbar-item">
          <Link to="/memberList" className="navbar-link">회원 목록</Link>
        </li>
        )}
        {/* currentUser?.userId는 Optional Chaining이라는 JavaScript의 문법입니다. 이는 객체가 null 또는 undefined일 때 에러를 발생시키지 않고 안전하게 속성 접근을 가능하게 합니다. 즉, currentUser가 존재하면 currentUser.userId에 접근하고, 존재하지 않으면 undefined를 반환합니다. */}

        <li className="navbar-item">
          <Link to="/posts" className="navbar-link">게시글 목록</Link>
        </li>
        {/* <li className="navbar-item">
          <Link to="/memberRounge" className="navbar-link">회원 관리2</Link>
        </li>
        <li className="navbar-item">
          <Link to="/members" className="navbar-link">회원 목록2</Link>
        </li>
        <li className="navbar-item">
          <Link to="/board" className="navbar-link">게시글 목록2</Link>
        </li> */}

        {/* ☆3-12)로그아웃 시 추가=>admin만 회원목록 보이도록 위 메뉴도 수정 */}
        {currentUser ? (
            <li className="navbar-item" style={{marginLeft:"auto"}}>
              <span>{currentUser.userId}님 로그인 중</span>
              {/* ☆1) 로그아웃 버튼 추가 => AuthContext3.jsx로 이동하여 로그아웃 기능추가*/}
              {/* <button>로그아웃</button> */}
              {/* ☆3-15) 로그아웃 기능 함수생성 */}
              <button onClick={handleLogout}>로그아웃</button>
            </li>
        ) : (
          <li className="navbar-item" style={{marginLeft:"auto"}}>
            <Link to="/login" className="navbar-link">
              <button>로그인</button>
            </Link>
            </li>
        )}
        
      </ul>
    </nav>
  );
}

export default NavBar;
