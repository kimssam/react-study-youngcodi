import React, { useState, useEffect } from 'react';
import "./Board.css"
const Board = () => {
    let [title, setTitle] = useState(['리액트','스프링','부트스트랩'])
    let copy = title;
    console.log(copy)
    copy[0]='파이썬'
    console.log("title"+title)
    const [posts, setPosts] = useState([
        {id:1, title:'첫번째 게시물',content:'첫번째 게시물의 내용', date:'2022-06-20 10:30'},
        {id:2, title:'두번째 게시물',content:'두번째 게시물의 내용', date:'2023-07-27 12:20'},
        {id:3, title:'세번째 게시물',content:'세번째 게시물의 내용', date:'2024-01-10 8:30'}
    ]);
   
    //새로운 게시물의 제목을 저장하는 state
    const [ newTitle, setNewTitle] =useState('');
    //새로운 게시물의 내용을 저장하는 state
    const [ newContent, setNewContent] =useState('');
    //선택된 게시물의 상태 : 초기값으로 null로 설정
    const [selectedPost, setSelectedPost] = useState(null);
    //수정 모드를 관리하는 state
    const [editMode, setEditMode] = useState(false);

    
    // const [todayNow, setTodayNow] = useState('');
    // const now = new Date();
    // useEffect(()=>{
    //     setTodayNow(`${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`)
    // },[])
    
    //새로운 게시글 등록 함수
    const addPost = () =>{
       if(newTitle.trim() && newContent.trim()){
        const now = new Date();
        const todayNow =`${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
         const newPost = {
            id: posts.length+1,
            title:newTitle,
            content:newContent,
            date:todayNow
         }
         //기존 게시물 배열에 새로운 게시물 추가
         setPosts([...posts,newPost]);
         //setPosts(posts.push(newPost))//배열을 직접 수정하려고 하면 에러!!
         setNewTitle('')
         setNewContent('')
       } 
    }

     //게시물 선택 함수
     const selectPost =(post)=>{
        setSelectedPost(post)
    };

    //원하는 게시물 목록을 삭제하는 함수
    const deletePost=(postId)=>{
        //주어진 postId 값과 일치하지 않는 게시물만 필터링하여 새로운 배열 생성
        setPosts(posts.filter(post=>post.id !== postId))
        //삭제하겠다고 선택한 게시물이 현재 보여지고 있는 하단의 세부내용일 때에는 세부내용을 안보이도록 구현하는 부분은 useEffect()를 사용해서 setPosts의 업데이트가 완료된 후 setSelectedPost(null)로 만들어야 한다!!
    }

    //선택한 게시물을 업데이트 하는 함수
    const updatePost = ()=>{
        const now = new Date();
        const todayNow =`${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;

        //게시물 목록에서 선택된 게시물을 업데이트
        const updatedPosts = posts.map(post=>
            post.id === selectedPost.id ? {...post, title:selectedPost.title, content:selectedPost.content, date:todayNow} : post
        )
        //상태 업데이트
        setPosts(updatedPosts);
        //선택된 게시물의 상태도 한번 더 업데이트
        setSelectedPost({...selectedPost,title:selectedPost.title, content:selectedPost.content, date:todayNow })
        //저장 버튼 클릭시 다시 원래의 세부사항을 보여주도록 구현
        setEditMode(false)
    }
        
    useEffect(()=>{
        if(selectedPost && !posts.some(post=>post.id === selectedPost.id)){
            setSelectedPost(null)
        }
    },[posts, selectedPost]);
   
    return (
        <div className='board-app'>
           <h1>게시판 앱 -6단계</h1>
           <div className='input-section'>
                <input value={newTitle} type="text" placeholder='제목 입력' onChange={(e)=>{setNewTitle(e.target.value)}}/><br />
                <textarea value={newContent} name="" id="" placeholder='내용 입력' onChange={(e)=>{setNewContent(e.target.value)}}></textarea>
                <button onClick={addPost}>게시글 등록</button>
           </div>
           <div className='post-list'>
                <h2>게시판 목록</h2>
                
               
                {posts.map((post) => 
                    (
                        <div key={post.id} className='post-item' onClick={()=>{selectPost(post)}}>
                            <h3>{post.title}</h3>
                            <p>{post.date}</p>
                            <button onClick={()=>{deletePost(post.id)}}>삭제</button>
                        </div>
                        // 이벤트 동작시 함수호출 구문을 direct로 넣으면 컴포넌트가 재랜더링이 될 때마다 함수호출이 되어 무한호출이 발생하므로 익명함수를 호출하여 ()=>{함수호출구문()}을 사용해서 이벤트 발생시에만 함수가 호출하는 구문이 만들어진다!!
                    )
                )}
           </div>
           {/* .post-list */}

           {selectedPost && (
            <div className='post-detail'>
                {editMode ? (
                    <>
                        <input 
                        type="text"
                        placeholder={selectedPost.title}
                        onChange={(e)=>setSelectedPost({...selectedPost, title:e.target.value})}/>
                        <textarea 
                        placeholder ={selectedPost.content}
                        onChange={(e)=>setSelectedPost({...selectedPost, content:e.target.value})} >
                        </textarea>
                        <button className='saveBtn' onClick={updatePost}>저장</button>
                    </>
                ) : (
                    <>
                        <h2>{selectedPost.title}</h2>
                        <p>{selectedPost.content}</p>
                        <p>{selectedPost.date}</p>
                        <button className='editBtn' onClick={()=>setEditMode(true)}>수정</button>
                    </>
                )}
                
            </div>
           )}
        </div>
    );
};

export default Board;