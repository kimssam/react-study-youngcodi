import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext2';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext); 
  // ☆2-2 추후 로그인 중 추가)AuthContext에서 currentUser와 setCurrentUser를 가져옵니다.

   const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(p=>p.userId == userId && p.password == password )
    //☆2-3 추후 로그인 중 추가)currentUser 변수를 user로 변경

    if (user) { //☆2-4 추후 로그인 중 추가)currentUser 변수를 user로 변경
      setCurrentUser(user); // ☆2-5 추후 로그인 중 추가)현재 사용자를 설정합니다.
      navigate('/posts'); // 게시글 목록 페이지로 이동
    } else {
      alert('잘못된 사용자 이름 또는 비밀번호입니다.');
    }
  };

  //☆2-6 추후 로그인 중 추가)
  if (currentUser) {
    return (
      <>
        <div>{currentUser.userId}님 로그인 중</div>
      </>
    );
  }
  //☆2-7 추후 로그인 중 추가)App2.js로 이동하여 AuthProvider로 감싸기
  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <label>
          사용자 이름:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        </label>
        <br />
        <label>
          비밀번호:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
