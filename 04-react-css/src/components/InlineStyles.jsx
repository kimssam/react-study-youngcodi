//InlineStyles.jsx
export const InlineStyles = () =>{
    const containerStyle ={
        width:"100%",
        padding:"2%",
        backgroundColor:"lightgray"
    }
    const textStyle ={
        color:"white",
        textAlign : "center",
        fontSize:"1.5em"
    }
    return (
        <div style={containerStyle}>
            <p style={textStyle}>Hello~React styles!</p>
        </div>
    );
}