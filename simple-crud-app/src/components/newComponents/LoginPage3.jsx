import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext3';

function LoginPage() {
  
  //[여기부터]
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //☆3-6) 여기는 주석처리 후 const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { currentUser, setCurrentUser, logout } = useAuth(); // ☆3-7) useAuth 훅을 통해 logout 함수를 가져옵니다.
  

   const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(p=>p.userId == userId && p.password == password )
    

    if (user) { 
      setCurrentUser(user); 
      // ☆3-8) 로컬 스토리지에 사용자 정보 저장)
      localStorage.setItem('currentUser', JSON.stringify(user)); 
      navigate('/posts'); 
    } else {
      alert('잘못된 사용자 이름 또는 비밀번호입니다.');
    }
  };

  // ☆3-9) 로그아웃 함수 구현 확인=>NavBar3로 갈 때 상단 [여기부터~여기까지] 가져가서 네브바 우측상단에도 넣기(로그인중, 로그아웃)=>NavBar3
  const handleLogout = () => {
    logout();
    navigate('/'); // 로그아웃 후 홈 페이지로 이동
  };
  //[여기까지=>네브바 우측상단에 넣기!!]

  if (currentUser) {
    return (
      <>
        <div>{currentUser.userId}님 로그인 중</div>
        {/* ☆3-1) 로그아웃 버튼 추가 => AuthContext3.jsx로 이동하여 로그아웃 기능추가*/}
        {/* <button>로그아웃</button> */}
        {/* ☆3-5) 로그아웃 기능 함수생성 */}
        <button onClick={handleLogout}>로그아웃</button>
      </>
    );
  }
  
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
