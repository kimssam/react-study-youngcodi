// src/components/PostsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from '../Board6';

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // npm install axios로 설치, 게시글 목록을 가져오는 API 호출
    axios.get('http://localhost:3001/posts') // API 엔드포인트를 수정하세요
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('게시글을 가져오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <div>
      {/* <h2>게시글 목록</h2> */}
      <Board/>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
