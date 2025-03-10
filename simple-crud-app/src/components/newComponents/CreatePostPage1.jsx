import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 새로운 게시글을 저장합니다
    const post = { id: Date.now(), title, content };
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    navigate('/posts'); // 게시글 목록 페이지로 이동
  };

  return (
    <div>
      <h1>게시글 작성</h1>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br />
        <label>
          내용:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <br />
        <button type="submit">작성</button>
      </form>
    </div>
  );
}

export default CreatePostPage;
