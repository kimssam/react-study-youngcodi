import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 사용자 데이터를 저장합니다 (백엔드 없이 단순하게 localStorage를 사용합니다)
    const user = {userId, password};
    /*처음에는 이렇게 먼저 만들고 아래 코드로 변경
    let users = null;
        if(users == null){
            users = []; 
        } else{
            users = JSON.parse(localStorage.getItem('users'));
        }
    */

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    
    //localStorage.setItem('users', JSON.stringify({ username, password }));
    localStorage.setItem('users', JSON.stringify(users));
    //JSON.stringify() 메서드를 사용하면 JavaScript 객체를 JSON 문자열로 변환할 수 있습니다. 이때 객체의 속성 값 중 undefined, 함수, 또는 심볼(Symbol)은 JSON 문자열로 변환되지 않으며, null로 처리되거나 무시됩니다.
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <label>
          사용자 아이디:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        </label>
        <br />
        <label>
          비밀번호:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUpPage;
