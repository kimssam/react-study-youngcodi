import React, { useState } from 'react';
import "./Board.css"
const Board = () => {

    const [posts, setPosts] = useState([
        {id:1, title:'첫번째 게시물',content:'첫번째 게시물의 내용'},
        {id:2, title:'두번째 게시물',content:'두번째 게시물의 내용'},
        {id:3, title:'세번째 게시물',content:'세번째 게시물의 내용'}
    ])
    //선택된 게시물의 상태 : 초기값으로 null로 설정
    const [selectedPost, setSelectedPost] = useState(null)
   
    //게시물 선택 함수
    const selectPost =(post)=>{
        setSelectedPost(post)
    }
    return (
        <div className='board-app'>
           <h1>게시판 앱 -2단계</h1>
           <div className='post-list'>
                <h2>게시판 목록</h2>
                {posts.map((post) => {
                    return(
                        <div key={post.id} className='post-item' onClick={()=>{selectPost(post)}}>
                            <h3>{post.title}</h3>
                        </div>
                        // 이벤트 동작시 함수호출 구문을 direct로 넣으면 컴포넌트가 재랜더링이 될 때마다 함수호출이 되어 무한호출이 발생하므로 익명함수를 호출하여 ()=>{함수호출구문()}을 사용해서 이벤트 발생시에만 함수가 호출하는 구문이 만들어진다!!
                    )
                })}
           </div>
           {/* .post-list */}
            {/* &&연산자는 왼쪽이 true라고 판정하면 오른쪽 반환한다.
            ||연산자는 왼쪽이 false라고 판정하면 오른쪽 반환한다. 
            null은 false라고 판정한다!! */}
           
           
           {selectedPost && (
            <div className='post-detail'>
                <h2>{selectedPost.title}</h2>
                <h2>{selectedPost.content}</h2>
            </div>
           )}
        </div>
    );
};

export default Board;