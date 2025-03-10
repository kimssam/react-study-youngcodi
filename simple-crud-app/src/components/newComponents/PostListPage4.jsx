import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//4단계)로그인한 아이디가 쓴 글만 수정, 삭제하도록 수정
function PostListPage() {
  const [posts, setPosts] = useState([]);
  //☆4-1)로그인한 사용자 상태 추가
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // 저장된 게시글을 가져옵니다
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);

    //☆4-2)로그인한 사용자 정보를 가져옵니다
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(storedUser);

  }, []); 

  const handleDelete = (id) => {
    // 게시글을 삭제합니다
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <h1>게시글 목록</h1>
      <Link to="/posts/create">게시글 작성</Link>
      <ul>

        {/* ☆4-3)로그인 사용자와 게시글 사용자가 같을 때만 수정, 삭제 보임 */}
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            {currentUser && currentUser.userId === post.authorId && (
              <>
                <Link to={`/posts/edit/${post.id}`}>수정</Link>
                <button onClick={() => handleDelete(post.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
        {/* ☆4-4)CreatePostPage4로 이동 */}
      </ul>
    </div>
  );
}

export default PostListPage;
