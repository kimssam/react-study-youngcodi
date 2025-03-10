
import './App.css';
import { useContext, useState } from 'react';
import { Card } from './components/Card'; 
import { AdminFlagContext } from './components/providers/AdminFlagProvider';

function App() {
  //플래그 : 특정 상태나 조건을 나타내기 위한 boolean값으로 사용된다.


  //관리자 플래그
  const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);

  //관리자 유무를 변경하는 토글 버튼 플래그
  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      {isAdmin ? <span>관리자 입니다.</span> : <span>관리자가 아닙니다.</span>}<br/>
      <button onClick={onClickSwitch}>관리자 전환 버튼</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
}

export default App;
