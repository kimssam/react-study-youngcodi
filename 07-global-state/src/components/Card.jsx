//Card.jsx

import { EditButton } from "./EditButton";

const style ={
    width:"70%",
    height:"200px",
    backgroundColor:"beige",
    borderRadius : "10px",
    padding:"10px 30px 30px",
    margin:"10px",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
}
export const Card = () =>{
    console.log("카드 랜더링")
    return(
        <div style={style}>
            <p>김관리 </p>
            <EditButton/>
        </div>
        
    );
}