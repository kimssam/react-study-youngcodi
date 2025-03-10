import React, { useState } from 'react';
import './member.css'

const MemberStep1 =() =>{
    //초기 회원 목록 상태
    const [users, setUsers] = useState(
        [
            {id:1, username:'user1'},
            {id:2, username:'user2'},
            {id:3, username:'user3'}
        ]
    );

    return(
        <div className="app">
            <h1>회원 관리 앱 - 1단계</h1>
            <div className="user-list">
                <h2>회원 목록</h2>
                {
                    users.map((user)=>{
                       return(
                        <div key={user.id} className='user-item'>
                            <h3>{user.username}</h3>
                        </div> 
                       )    
                    })
                }
            </div>
        </div>
    );
}

export default MemberStep1;