// ListItem.tsx
import type {User} from "../types/user"
import { FC } from 'react';

//FC:함수 컴포넌트 자체 타입 정의 :암묵적으로 children(User)을 포함한다.
export const ListItem:FC<User> = (props:User) =>{
    const {id, name, age, personalColor, hobbies} = props;
    return(
        <h1 style={{color: personalColor}}>
            {id} : {name} ({age}) [취미:{hobbies && hobbies.length > 0 ?hobbies?.join(" / ") : "취미 없음"}]
        </h1>
        //join()는 undefined는 사용할 수 없기 때문에 에러가 발생
    );
};