import React, { useState } from 'react';
import "./Board.css"
const Board = () => {

    const [posts, setPosts] = useState([
        {id:1, title:'첫번째 게시물',content:'첫번째 게시물의 내용'},
        {id:2, title:'두번째 게시물',content:'두번째 게시물의 내용'},
        {id:3, title:'세번째 게시물',content:'세번째 게시물의 내용'}
    ])

   
    return (
        <div className='board-app'>
           <h1>게시판 앱</h1>
           <div className='post-list'>
                <h2>게시판 목록</h2>
                {posts.map((post) => {
                    return(
                        <div key={post.id} className='post-item'>
                            <h3>{post.title}</h3>
                        </div>
                    )
                })}
           </div>
        </div>
    );
};

export default Board;