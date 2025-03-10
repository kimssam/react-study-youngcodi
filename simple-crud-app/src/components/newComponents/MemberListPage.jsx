import React from 'react';

function MemberListPage() {
  const users = JSON.parse(localStorage.getItem('users'));
  return(
    <div>
        <h1>회원 목록</h1>
        {currentUser && currentUser.userId === "admin" && currentUser.password === "admin" ? (
             <ul>
                {users.length > 0 ?(
                    users.map((user, index)=>
                        (
                            <li key={index}>{user.userId} : {user.password}</li>
                        )
                    )
                ):(
                    <li>회원이 없습니다.</li>
                )}
            </ul>
        ) :
         (
            <div>회원 목록은 관리자에게만 볼 수 있는 권한이 있습니다.</div>
        )}         
    </div>
);
}

export default MemberListPage;
