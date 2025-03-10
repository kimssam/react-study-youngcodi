//normal export : default 키워드를 사용하지 않고 export
const ColoredMessage = (props)=>{
    console.log(props)

    //props 분할 대입 :destructure(destructuring assignment)
    const {color, children} = props;
    const contentStyle={
        // color:props.color,
        color:color,
        fontSize:"2em",
        borderBottom:"3px solid red",
        fontFamily:'gothic'
    }

    // return <p style={contentStyle}>{props.children}</p>
    return <p style={contentStyle}>{children}</p>
}
export const Test =()=>{
    return <div></div>
}
export default ColoredMessage;
//default export : default 키워드를 사용한 export