// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/newComponents/NavBar1';
import HomePage from './components/newComponents/HomePage';
import MemberListPage from './components/newComponents/MemberListPage';
import SignUpPage from './components/newComponents/SignUpPage';
import PostListPage from './components/newComponents/PostListPage1';
import LoginAndJoin from './components/Member7';
import MembersPage from './components/Member5';
import Board from './components/Board6';
import LoginPage from './components/newComponents/LoginPage2';
import CreatePostPage from './components/newComponents/CreatePostPage1';
import EditPostPage from './components/newComponents/EditPostPage';

//1단계)기존에 작업한  member와 board 가져와서 Routes 활용하여 링크걸기=>스타일은 빼고 백엔드 기능만 넣어서 회원 게시판 기능 완성하기 시작!!
function App() {
  return (
    <Router>
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
  );
}

export default App;
