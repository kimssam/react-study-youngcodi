import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'; // 외부 CSS 파일을 import 합니다.

const NavBar = () => {
 
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">홈</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">로그인</Link>
        </li>
        <li className="navbar-item">
          <Link to="/join" className="navbar-link">회원 가입</Link>
        </li>
        <li className="navbar-item">
          <Link to="/memberList" className="navbar-link">회원 목록</Link>
        </li>
        <li className="navbar-item">
          <Link to="/posts" className="navbar-link">게시글 목록</Link>
        </li>
        <li className="navbar-item">
          <Link to="/memberRounge" className="navbar-link">회원 관리2</Link>
        </li>
        <li className="navbar-item">
          <Link to="/members" className="navbar-link">회원 목록2</Link>
        </li>
        <li className="navbar-item">
          <Link to="/board" className="navbar-link">게시글 목록2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
