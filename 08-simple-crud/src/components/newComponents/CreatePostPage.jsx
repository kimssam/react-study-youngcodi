//CreatePostPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePostPage(){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate();

    //localStorage에서 사용자 정보 가져오기
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleSubmit = (e)=>{
        e.preventDefault();
        //const post = {id:Date.now(), title, content};
        let posts = JSON.parse(localStorage.getItem('posts')) || [];

        const newPost = {
            id:Date.now(),
            title,
            content,
            authorId : currentUser.userId
        }
        posts.push(newPost);
        localStorage.setItem("posts",JSON.stringify(posts));
        navigate("/posts");
    };

    return(
        <div>
            <h1>게시글 작성</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    제목 
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </label>
                <br />
                <label>
                    내용
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)}/>
                </label>
                <br />
                <button type="submit">작성완료</button>
            </form>
        </div>
    );
}

export default CreatePostPage;