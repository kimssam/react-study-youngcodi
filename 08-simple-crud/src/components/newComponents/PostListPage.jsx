//PostListPage

import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostListPage(){
    const [posts, setPosts] = useState([]);
    //로그인한 사용자 상태 추가
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        //저장된 게시글을 가져오기
        const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        setPosts(storedPosts);

        //로그인한 사용자 정보 가져오기
        const storedUser = JSON.parse(localStorage.getItem("currentUser")); //객체로 다시 변환해서 가져옴
        setCurrentUser(storedUser);
    },[]); //의존성 배열에 빈 배열[]을 넣으면 컴포넌트가 처음 마운팅될 때만 실행된다.

    const handleDelete = (id) =>{
        const updatedPosts = posts.filter(post=>post.id != id);
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }
    return(
        <div>
            <h1>게시글 목록</h1>
            <br /><br />
            <Link to="/posts/create">게시글 작성</Link>
            <br /><br />
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>
                        {post.title}&nbsp;&nbsp;
                        {currentUser && currentUser.userId == post.authorId &&(
                            <>
                                <Link to={`/posts/edit/${post.id}`}>수정</Link>&nbsp;&nbsp;
                                <button onClick={()=>handleDelete(post.id)}>삭제</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostListPage;