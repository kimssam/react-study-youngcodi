// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/newComponents/NavBar';
import HomePage from './components/newComponents/HomePage';
import MemberListPage from './components/newComponents/MemberListPage';
import SignUpPage from './components/newComponents/SignUpPage';
import PostListPage from './components/newComponents/PostListPage';
import LoginAndJoin from './components/Member7';
import MembersPage from './components/Member5';
import Board from './components/Board6';
import LoginPage from './components/newComponents/LoginPage2';
import CreatePostPage from './components/newComponents/CreatePostPage';
import EditPostPage from './components/newComponents/EditPostPage';
import { AuthProvider } from './components/newComponents/AuthContext2';

//2단계)AuthContext2로 이동하여 '..님 로그인 중' 추가하기
function App() {
  return (
    <AuthProvider>
    <Router>
      {/*☆2-8 추후 로그인 중 추가)App 안에 provider로 감싸기 AuthProvider 컴포넌트를 사용하여 인증 상태를 전역적으로 관리합니다.=>완성, 확인!!후 LoginPage3.jsx에 로그아웃 버튼 추가 */}
      
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<SignUpPage />} />
          <Route path="/memberList" element={<MemberListPage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/create" element={<CreatePostPage />} />
          <Route path="/posts/edit/:id" element={<EditPostPage />} />
          <Route path="/memberRounge" element={<LoginAndJoin />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </div>
     
    </Router>
    </AuthProvider>
  );
}

export default App;
