import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 저장된 게시글을 가져옵니다
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []); //step1)의존성 배열로 빈 배열 []을 전달하면, 컴포넌트가 처음 렌더링될 때만 실행되고, 이후에는 실행되지 않습니다. step2)게시글 삭제를 클릭시 바로 반영되도록 하려면 의존성 배열에 [posts]를 넣으면 계속 랜더링걸린다!! =>에러

  const handleDelete = (id) => {
    // 게시글을 삭제합니다
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    //JSON.stringify()는 JavaScript 내장 함수로, JavaScript 객체나 배열을 JSON 문자열로 변환합니다. 이 함수는 객체를 JSON 형식의 문자열로 직렬화(serialize)하는 데 사용됩니다. 이를 통해 데이터를 네트워크를 통해 전송하거나, 로컬 스토리지에 저장하는 등의 작업을 수행할 수 있습니다.
  };

  return (
    <div>
      <h1>게시글 목록</h1>
      <Link to="/posts/create">게시글 작성</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            <Link to={`/posts/edit/${post.id}`}>수정</Link>
            <button onClick={() => handleDelete(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostListPage;
