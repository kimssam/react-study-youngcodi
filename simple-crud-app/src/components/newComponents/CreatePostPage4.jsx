import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  //☆4-5)localStorage에서 로그인 사용자 정보 가져오기
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleSubmit = (e) => {
    e.preventDefault();
    // ☆4-6)새로운 게시글을 저장방법을 수정
    //const post = { id: Date.now(), title, content };
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // ☆4-6)새로운 게시글 저장방법을 수정
    const newPost = {
      id: Date.now(), // 간단한 ID 생성 방법
      title,
      content,
      authorId: currentUser.userId, // 작성자의 사용자 ID를 포함
    };
    // posts.push(post);
    posts.push(newPost); //☆4-7)게시글 객체를 리스트에 추가 =>끝!!

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
