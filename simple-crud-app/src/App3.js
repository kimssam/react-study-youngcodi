// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/newComponents/NavBar3';
import HomePage from './components/newComponents/HomePage';
import MemberListPage from './components/newComponents/MemberListPage';
import SignUpPage from './components/newComponents/SignUpPage';
import PostListPage from './components/newComponents/PostListPage4';
import LoginAndJoin from './components/Member7';
import MembersPage from './components/Member5';
import Board from './components/Board6';
import LoginPage from './components/newComponents/LoginPage3'; //LoginPage3
import CreatePostPage from './components/newComponents/CreatePostPage4';
import EditPostPage from './components/newComponents/EditPostPage';
import { AuthProvider } from './components/newComponents/AuthContext3';//AuthContext3

///3단계)로그아웃 버튼과 기능 추가=>LoginPage3
function App() {
  return (
    <AuthProvider>
    <Router>
            
      <div className="App" style={{padding:"30px"}}>
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
