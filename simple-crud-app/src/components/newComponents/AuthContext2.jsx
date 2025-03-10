// ☆2-1 추후 로그인 중 추가)AuthContextsrc/context/AuthContext.js 파일 작성=> 회원 로그인을 글로벌 state로 관리
import React, { createContext, useState, useContext } from 'react';

// AuthContext 생성: React의 Context API를 사용하여 생성한 것입니다.
// 이 컨텍스트를 통해 애플리케이션 전역에서 인증 상태를 관리할 수 있습니다.
const AuthContext = createContext();

// AuthProvider 컴포넌트: 애플리케이션의 인증 상태를 관리하는 컴포넌트입니다.
// 이 컴포넌트는 애플리케이션의 루트 컴포넌트(또는 필요한 상위 컴포넌트)에 래핑되어야 합니다.
export const AuthProvider = ({ children }) => {
  // 현재 로그인된 사용자 상태를 관리하는 useState 훅입니다.
  const [currentUser, setCurrentUser] = useState(null);

  return (
    // AuthContext.Provider를 통해 하위 컴포넌트들에게 currentUser와 setCurrentUser를 전달합니다.
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth 훅: 편리하게 AuthContext를 사용할 수 있도록 만든 커스텀 훅입니다.
// 이 훅을 사용하면 더 직관적으로 인증 상태를 사용할 수 있습니다.
export const useAuth = () => useContext(AuthContext);

// 기본으로 AuthContext를 export 합니다.
export default AuthContext;

//=>LoginPage2.jsx로 이동