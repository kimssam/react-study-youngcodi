import React, { useState } from 'react';
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

    const [selectedUser, setSelectedUser] = useState(null)

    const selectUser = (user)=>{
        setSelectedUser(user)
    }

    return(
        <div className="app">
            <h1>회원 관리 앱 - 1단계</h1>
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
                </div>
            )}

        </div>
    );
}

export default MemberStep1;