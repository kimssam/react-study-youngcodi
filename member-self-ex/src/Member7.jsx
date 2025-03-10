import React, { useState } from 'react';
import './member.css'

const MemberStep1 =() =>{
    //초기 회원 목록 상태
    const [users, setUsers] = useState(
        [
            {id:1, username:'user1', email:'user1@gmail.com', password:'1234'},
            {id:2, username:'user2', email:'user2@gmail.com', password:'1234'},
            {id:3, username:'user3', email:'user2@gmail.com', password:'1234'}
        ]
    );

    //선택된 회원 상태
    const [selectedUser, setSelectedUser] = useState(null)
    //수정 모드 상태
    const [editMode, setEditMode] = useState(false)
    //새 회원의 정보를 관리하는 상태
    const [newUsername, setNewUsername] = useState('')
    const [newMail, setnewMail] = useState('')
    //회원 가입과 로그인 정보 상태
    const [form, setForm] = useState({username:'', email:'', password:''})
    const [loginForm, setLoginForm] = useState({username:'', password:''})
    //로그인 상태 및 현재 사용자 상태
    const [loggedInUser, setLoggedInUser] = useState(null)
    //회원 수정 폼 상태
    const [editUserForm, setEditUserForm] = useState({username:'', email:'', password:''})


    //회원 선택 함수
    const selectUser = (user)=>{
        setSelectedUser(user)
    }
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

    //클릭한 버튼의 회원을 삭제하는 함수
    const deleteUser = (userId) =>{
         //목록에서 회원을 삭제
        setUsers(users.filter(user=>user.id !== userId));
        //클릭한 회원의 상세정보 데이터 삭제
        if(selectedUser && selectedUser.id === userId){
            setSelectedUser(null);
        }
    }

    //클릭한 버튼의 회원을 수정하는 함수
    const editUser = () =>{
        const updateUsers = users.map(user=>(user.id===selectedUser.id)? {...user, username :selectedUser.username, email:selectedUser.email } : user);

        setUsers(updateUsers) //목록의 내용 수정
        //수정 모드 비활성화
        setEditMode(false)
    }

    // 회원 가입 함수
    const registerUser = () => {
        if (form.username.trim() && form.email.trim() && form.password.trim()) {
            const newUser = {
                id: users.length + 1,
                ...form
            };
            setUsers([...users, newUser]);
            setForm({ username: '', email: '', password: '' });
        }
    };

    // 로그인 함수
    const loginUser = () => {
        const user = users.find(user => user.username === loginForm.username && user.password === loginForm.password);
        if (user) {
            setLoggedInUser(user);
            setLoginForm({ username: '', password: '' }); 
        }
    };

    //로그아웃 함수
    const logoutUser = () =>{
        setLoggedInUser(null); //로그아웃 하면  null로 설정
    }

    //회원폼 수정 함수
    const updateUser = () =>{
        const updateUsers = users.map(user=>user.id === loggedInUser.id ? {...user,...editUserForm} : user)
        setUsers(updateUsers);
        setLoggedInUser({...loggedInUser,...editUserForm});
        setEditUserForm({username:'', email:'', password:''})
    }

    return(
        <div className="app">
            <h1>회원 관리 앱 - 7단계</h1>
            {!loggedInUser ?(
                <>
                    <div className="auth-section">
                        <h2>회원 가입</h2>
                        <input 
                            type="text" 
                            value={form.username} 
                            placeholder='아이디 입력' 
                            onChange={(e)=>{setForm({...form, username:e.target.value})}}/><br />
                        <input 
                            type="email" 
                            value={form.email} 
                            placeholder='이메일 입력' 
                            onChange={(e)=>{setForm({...form, email: e.target.value})}}/><br />
                        <input 
                            type="password" 
                            value={form.password} 
                            placeholder='비밀번호 입력' 
                            onChange={(e)=>{setForm({...form, password: e.target.value})}}/><br />
                        <button onClick={registerUser} className='memAddBtn'>회원 가입</button>
                    </div>
                    <div className="auth-section">
                        <h2>로그인</h2>
                        <input 
                            type="text" 
                            value={loginForm.username} 
                            placeholder='아이디 입력' 
                            onChange={(e)=>{setLoginForm({...loginForm, username: e.target.value})}}/><br />
                        <input 
                            type="password" 
                            value={loginForm.password} 
                            placeholder='비밀번호 입력' 
                            onChange={(e)=>{setLoginForm({...loginForm, password: e.target.value})}}/><br />
                        <button onClick={loginUser} className='memAddBtn'>로그인</button>
                    </div>
                </>
            ):(
                <>
                    <h2>로그인한 사용자 : {loggedInUser.username}님 로그인중</h2>
                    <button onClick={logoutUser} className='logoutBtn'>로그아웃</button>
                    <div className="user-detail">
                        <h2>회원 정보 수정</h2>
                        <input 
                            type="text" 
                            value={editUserForm.username} 
                            placeholder='아이디 입력' 
                            onChange={(e)=>{setEditUserForm({...editUserForm, username:e.target.value})}}/><br />
                        <input 
                            type="email" 
                            value={editUserForm.email} 
                            placeholder='이메일 입력' 
                            onChange={(e)=>{setEditUserForm({...editUserForm, email: e.target.value})}}/><br />
                        <input 
                            type="password" 
                            value={editUserForm.password} 
                            placeholder='비밀번호 입력' 
                            onChange={(e)=>{setEditUserForm({...editUserForm, password: e.target.value})}}/><br />
                        <button onClick={updateUser} className='memAddBtn'>회원 정보 수정</button>
                    </div>
                </>
            )}
            
        </div>
    );
}

export default MemberStep1;