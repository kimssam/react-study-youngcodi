//SignUpPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage(){
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault(); //브라우저 기본 동작 방지
        const user = {userId, password};
        /*
        let users = null;
        if(users == null){
            users = []; 
        } else{
            users = JSON.parse(localStorage.getItem('users'));
        }
        */
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        //stringify()를 이용하면 객체를 JSON 문자열로 변환할 수 있다.
        navigate('/login');
    }
    return(
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <label>사용자 아이디
                    <input type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} required/>
                </label>
                <br />
                <label>비밀번호
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                </label>
                <br />
                <button type='submit'>회원가입</button>
            </form>
        </div>
    );
}

export default SignUpPage;