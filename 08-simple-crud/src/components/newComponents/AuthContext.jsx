//AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || null
    );

    //로그아웃 기능 추가

    const logout = () =>{
        setCurrentUser(null);
        localStorage.removeItem("currentUser");//로컬 스토리지에서 사용자 정보 삭제
    }
    return(
        <AuthContext.Provider value={{currentUser, setCurrentUser, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
//커스텀 훅
export function useAuth(){
    return useContext(AuthContext);
} 

export default AuthContext;