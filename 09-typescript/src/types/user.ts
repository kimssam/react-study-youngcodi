//user.ts

export type User = {
    id:number,
    name :string,
    age: number,
    personalColor:string,
    //?의 의미 string | undefined
    hobbies? : string[]
}