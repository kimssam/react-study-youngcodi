import './App.css';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/newComponents/HomePage';
import NavBar from './components/newComponents/NavBar';
import Board from './components/Board6';
import MemberRounge from './components/Member7';
import Members from './components/Member5';
import SignUpPage from './components/newComponents/SignUpPage';
import LoginPage from './components/newComponents/LoginPage';
import PostListPage from './components/newComponents/PostListPage';
import CreatePostPage from './components/newComponents/CreatePostPage';
import EditPostPage from './components/newComponents/EditPostPage';
import MemberListPage from './components/newComponents/MemberListPage';
import { AuthProvider } from './components/newComponents/AuthContext';


function App() {
  return (
    <AuthProvider> 
      {/* AuthProvider 컴포넌트를 사용하여 인증 상태를 전역적으로 관리 */}
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/join" element={<SignUpPage/>}/>
            <Route path="/memberList" element={<MemberListPage/>}/>
            <Route path="/posts/create" element={<CreatePostPage/>}/>
            <Route path="/posts/edit/:id" element={<EditPostPage/>}/>
            <Route path="/posts" element={<PostListPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
