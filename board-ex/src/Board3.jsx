import React, { useState } from 'react';
import "./Board.css"
const Board = () => {
    let [title, setTitle] = useState(['리액트','스프링','부트스트랩'])
    let copy = title;
    console.log(copy)
    copy[0]='파이썬'
    console.log("title"+title)
    const [posts, setPosts] = useState([
        {id:1, title:'첫번째 게시물',content:'첫번째 게시물의 내용'},
        {id:2, title:'두번째 게시물',content:'두번째 게시물의 내용'},
        {id:3, title:'세번째 게시물',content:'세번째 게시물의 내용'}
    ]);
   
    //새로운 게시물의 제목을 저장하는 state
    const [ newTitle, setNewTitle] =useState('');
     //새로운 게시물의 내용을 저장하는 state
     const [ newContent, setNewContent] =useState('');
      //선택된 게시물의 상태 : 초기값으로 null로 설정
    const [selectedPost, setSelectedPost] = useState(null);
   
    //게시물 선택 함수
    const selectPost =(post)=>{
        setSelectedPost(post)
    };
    //새로운 게시글 등록 함수
    const addPost = () =>{
       if(newTitle.trim() && newContent.trim()){
         const newPost = {
            id: posts.length+1,
            title:newTitle,
            content:newContent
         }
         //기존 게시물 배열에 새로운 게시물 추가
         setPosts([...posts,newPost]);
         //setPosts(posts.push(newPost))//배열을 직접 수정하려고 하면 에러!!
         setNewTitle('')
         setNewContent('')
       } 
    }
    return (
        <div className='board-app'>
           <h1>게시판 앱 -3단계</h1>
           <div className='input-section'>
                <input value={newTitle} type="text" placeholder='제목 입력' onChange={(e)=>{setNewTitle(e.target.value)}}/><br />
                <textarea value={newContent} name="" id="" placeholder='내용 입력' onChange={(e)=>{setNewContent(e.target.value)}}></textarea>
                <button onClick={addPost}>게시글 등록</button>
           </div>
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