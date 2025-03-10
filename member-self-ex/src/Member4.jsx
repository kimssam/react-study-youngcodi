import React, { useState } from 'react';
import './member.css'

const MemberStep1 =() =>{
    //초기 회원 목록 상태
    const [users, setUsers] = useState(
        [
            {id:1, username:'user1', email:'user1@gmail.com'},
            {id:2, username:'user2', email:'user2@gmail.com'},
            {id:3, username:'user3', email:'user2@gmail.com'}
        ]
    );

    //선택된 회원 상태
    const [selectedUser, setSelectedUser] = useState(null)

    //회원 선택 함수
    const selectUser = (user)=>{
        setSelectedUser(user)
    }

    //새 회원의 정보를 관리하는 상태
    const [newUsername, setNewUsername] = useState('')
    const [newMail, setnewMail] = useState('')

    //새로 회원을 추가하는 함수
    const addUser =()=>{
        if(newUsername.trim() && newMail.trim()){
            const newUser ={
                id:users.length+1, 
                username:newUsername, 
                email:newMail
            }
            setUsers([...users,newUser]);
        }
    }

    //클릭한 목록의 회원을 삭제하는 함수
    const deleteUser = (userId) =>{
         //목록에서 회원을 삭제
        setUsers(users.filter(user=>user.id !== userId));
        //클릭한 회원의 상세정보 데이터 삭제
        if(selectedUser && selectedUser.id === userId){
            setSelectedUser(null);
        }
    }
    return(
        <div className="app">
            <h1>회원 관리 앱 - 4단계</h1>
            <div className="input-section">
                <input type="text" value={newUsername} placeholder='아이디 입력' onChange={(e)=>{setNewUsername(e.target.value)}}/><br />
                <input type="email" value={newMail} placeholder='이메일 입력' onChange={(e)=>{setnewMail(e.target.value)}}/><br />
                <button onClick={addUser} className='memAddBtn'>회원 추가</button>
            </div>
            <div className="user-list">
                <h2>회원 목록</h2>
                {
                    users.map((user)=>{
                       return(
                        <div key={user.id} className='user-item' onClick={()=>{selectUser(user)}}>
                            <h3>{user.username}</h3>
                        </div> 
                       )    
                    })
                }
            </div>
        
            {selectedUser && (
                <div className='user-detail'>
                  <h2>회원 정보</h2> 
                  <p>아이디 : {selectedUser.username}</p>
                  <p>이메일 : {selectedUser.email}</p>
                  <button className="deleteBtn" onClick={()=>deleteUser(selectedUser.id)}>삭제</button>
                </div>
            )}

        </div>
    );
}

export default MemberStep1;