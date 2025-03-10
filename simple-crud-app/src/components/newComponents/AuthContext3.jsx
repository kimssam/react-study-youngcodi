
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => { //☆3-2현재 사용자 로그인 상태 로컬저장소에 저장
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser')) || null
  );

  // ☆3-3 로그아웃 기능 추가)
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser'); // 로컬 스토리지에서 사용자 정보 삭제
  };

  return (
    // ☆3-4 logout 변수 추가)
    <AuthContext.Provider value={{ currentUser, setCurrentUser , logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext); //3-5)return 넣기
}

export default AuthContext;

//=>LoginPage3.jsx로 이동