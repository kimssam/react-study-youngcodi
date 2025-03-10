import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //React Router v6에서 제공하는 useNavigate 훅을 사용하여 네비게이션(페이지 전환)을 제어하는 데 필요한 함수인 navigate를 가져오는 구문입니다. React Router는 React 애플리케이션에서 클라이언트 사이드 라우팅을 구현하는 데 널리 사용되는 라이브러리입니다.useNavigate 훅은 컴포넌트 내에서 프로그램적으로 네비게이션을 수행할 수 있게 합니다. 이 훅을 사용하면 특정 경로로 이동하거나 페이지를 리다이렉트할 수 있습니다. 예를 들어, 사용자가 로그인한 후 특정 페이지로 이동시키거나, 어떤 작업이 완료된 후 다른 페이지로 리다이렉트할 때 사용할 수 있습니다.

  /*
  =useNavigate의 활용
  1)특정 경로로 이동: navigate('/home');는 사용자를 /home 경로로 이동시킵니다.
  2)방향 제어: 
  navigate(-1);는 이전 페이지로 이동합니다. (브라우저의 뒤로 가기 기능과 유사)
  navigate(1);는 다음 페이지로 이동합니다. (브라우저의 앞으로 가기 기능과 유사)
  3)상태 전달:   navigate('/home', { state: { from: 'login' } });와 같이, 두 번째 인수로 상태를 전달할 수 있습니다.
  4)기타 옵션: replace 옵션을 사용하여 히스토리 스택을 대체할 수 있습니다. navigate('/home', { replace: true });*/

  const handleSubmit = (e) => {
    e.preventDefault();//폼 제출 시 페이지 새로 고침을 방지, 링크를 클릭하면 페이지가 이동하지만, 브라우저의 기본 동작을 막고 React 라우터를 통해 페이지를 전환하거나 특정 작업을 수행하고 싶을 때 사용하여 특히 React와 같은 SPA 프레임워크에서 매우 유용

    
    //브라우저 개발자 도구에서 Application(또는 Storage) 탭으로 이동하면 localStorage에 접근가능하며 localStorage에 저장된 데이터는 사용자가 명시적으로 삭제하거나 브라우저의 캐시를 지우지 않는 한 지속적으로 남아 있습니다. 또한 도메인별 저장소: 각 도메인마다 고유한 저장소를 가지므로, 한 도메인에서 저장한 데이터는 다른 도메인에서 접근할 수 없으며 브라우저마다 다르지만, 일반적으로 localStorage의 용량은 약 5MB로 제한되며 간단한 API로 데이터를 저장하고 불러올 수 있습니다.

    /*데이터를 관리하기 위해 다음과 같은 메서드를 사용할 수 있습니다
    localStorage.setItem(key, value): 데이터를 저장합니다.
    localStorage.getItem(key): 저장된 데이터를 불러옵니다.
    localStorage.removeItem(key): 저장된 데이터를 삭제합니다.
    localStorage.clear(): 모든 데이터를 삭제합니다.*/

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(p=>p.userId == userId && p.password == password )
    if (currentUser != null) {
      navigate('/posts'); // 게시글 목록 페이지로 이동
    } else {
      alert('잘못된 사용자 이름 또는 비밀번호입니다.');
    }
  };

 
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
