import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // 게시글을 가져옵니다
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const currentPost = posts.find(p => p.id === parseInt(id));
    if (currentPost) {
      setPost(currentPost);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 게시글을 업데이트합니다
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts = posts.map(p => (p.id === parseInt(id) ? post : p));
    localStorage.setItem('posts', JSON.stringify(posts));
    navigate('/posts'); // 게시글 목록 페이지로 이동
  };

  return (
    <div>
      <h1>게시글 수정</h1>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input type="text" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} required />
        </label>
        <br />
        <label>
          내용:
          <textarea value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })} required />
        </label>
        <br />
        <button type="submit">업데이트</button>
      </form>
    </div>
  );
}

export default EditPostPage;
