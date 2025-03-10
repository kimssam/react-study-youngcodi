//추가 버튼 클릭시 실행하는 함수 onClickAdd
const onClickAdd = () =>{
  const textEl = document.getElementById("add-text")
  const text = textEl.value  
  textEl.value=""

  //태그 생성
  const li = document.createElement("li")
  const div = document.createElement("div")
  const p = document.createElement("p")

  //입력창에 텍스트 입력하면 메모 목록 추가
  p.textContent = text
  const button = document.createElement("button")
  button.textContent="삭제"

  div.appendChild(p)
  div.appendChild(button)
  li.appendChild(div)
  document.getElementById("memo-list").appendChild(li)

  //버튼 클릭시, 행 삭제 처리
  button.addEventListener("click",()=>{
    const deleteTarget = button.closest("li")
    document.getElementById("memo-list").removeChild(deleteTarget)
  })
}

//버튼 클릭시, onClickAdd()호출
document.getElementById("add-button").addEventListener("click",()=>onClickAdd())