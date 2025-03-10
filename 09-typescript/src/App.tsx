import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { ListItem } from './components/ListItem';
import type {User} from "./types/user"


function App() {

  //다양한 타입으로 변수 설정하기

  //=====변수 타입 지정=====
  //1)String으로 지정
  let str:string="A"
  str="10"
  //str=10
  console.log("1)");
  console.log(str+1);

  //2)number타입으로 지정
  let num:number=0
  num=10
  //num="10"
  console.log("2)");
  console.log(num+1);

  //3)boolean타입으로 지정
  let bool:boolean=true
  bool=false
  //bool = 10
  console.log("3)"+bool);

  //4)배열 타입
  const arr1:Array<number>=[0,1,2]
  let arr2:number[] = [1,2,3]
  arr1.push(10)
  console.log("4)"+arr1);
  //arr1.push("10")
  arr2.push(100)
  console.log("4-2)"+arr2);

  //5)null타입 : 변수에 아무 값도 넣고 싶지 않지만 그 상태를 명확하게 나타내고 싶을 때 null을 초기화함
  let null1:null 
  null1 = null
  //null1 = "문자열"
  //null1 = 10
  //null1 = undefined
  console.log("5)"+null1);

  //6)undefined 타입 : 변수는 선언되었지만 아직 값을 할당하지 않았을 때 자동으로 부여되는 값
  let undefined1 : undefined
  undefined1 = undefined
  //undefined1 = "문자열"
  //undefined1 = null
  console.log("6)"+undefined1);

  //7)any타입 :비권장함
  let any1:any
  any1 = false
  any1 = "문자열"
  any1 = 100
  any1 = undefined
  any1 = null
  const arr3:Array<any>=[0,"처음부터 문자열",2]
  arr3.push("문자열")
  console.log("7)"+arr3);

  //=====함수 타입 지정=====

  //void 타입으로 반환
  const funcA = (num:number):void=>{
    console.log("8)"+(num+1));
  }
  funcA(100)

  //=====객체 타입 지정=====

  const obj:{str:string, num:number} ={
      str : "A",
      num : 10
  }
  console.log(obj);
  console.log(obj.str);
  console.log(obj.num);
  console.log("9)"+obj+","+obj.str+","+obj.num);

  //=====복합 타입 지정=====
  //1)복합타입=>교차타입 intersection type : 타입 & 타입으로 지정=>여러 타입의 특성을 모두 가져야 하는 새로운 타입을 만든다!
  const obj1:{str:string} & {num : number}={
    str : "B",
    num : 100
  }
  console.log("10)"+obj1+","+obj1.str+","+obj1.num);

  type TypeA = {
    str : string,
    bool : boolean
  }

  type TypeB = {
    str : string,
    num : number
  }

  type TypeC = TypeA & TypeB
  const obj2:TypeC={
    str : "문자열",
    num : 5,
    bool:false
  }

  //2)복합타입=>병합타입 union type : 타입 | 타입으로 지정=>여러 타입의 특성중 일부만 가져도 되는 새로운 타입을 만든다!
  let val1:string | number = 10
  val1 = "A"
  val1 = 100
  //val1 = undefined
  //val1 = []
  console.log("10)"+val1);


 //generic탕딥
  type CustomeType<T> ={
    val:T
  }
  const strObj:CustomeType<string> = {val : "A"}

  //useState 정의시 제네릭 활용
  const [ num2, setNum] = useState<number>(100);
  useEffect(()=>{
    console.log(num2);
  },[])

  const increaseNumber = () =>{
    setNum(num2+1)
  }

  //==========API로 얻은 json 데이터 활용하기===========
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("https://raw.githubusercontent.com/kimssam/youngcodi/main/User.json").then((res) => {
      setUsers(res.data);
    }).catch(error=>{
      console.error("에러가 발생",error)
    });
  }, []);

  return (
    <div>
      <div className="App">
        <h1>현재 숫자: {num2}</h1>
        <button onClick={increaseNumber}>숫자 증가시키기</button>
      </div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name} 
          age={user.age}
          personalColor= {user.personalColor}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
}


export default App;













