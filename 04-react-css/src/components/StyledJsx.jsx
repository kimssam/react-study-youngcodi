//StyledJsx.jsx : 리액트의 프레임워크로 유명한 Next.js에서 표준으로 내장되어 있는 스타일 라이브러리, scss문법은 사용할 수 없었으나 지금은 사용가능!!

export const StyledJsx=()=>{
    return(
        <>
            <div className="container">
                <p className="title">StyledJsx 입니다.</p>
                <button className="button">버튼</button>
            </div>

            <style jsx>{`
                .container{
                    border:1px solid gray;
                    padding:8px;
                    margin:8px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-radius: 20px;;
                }
                .title{
                    color:gray;
                    font-size:1.5em;
                }
                .button{
                    background-color: lightgray;
                    border:none;
                    padding:10px;
                    border-radius: 8px;
                    &:hover{
                        background-color: darkgray;
                        cursor: pointer;
                        color:white;
                    }
                }       
            
            `}</style>
        </>
    );
}