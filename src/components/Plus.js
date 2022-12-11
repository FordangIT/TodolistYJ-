import styled, {keyframes} from "styled-components";
import axios from 'axios';
import React, {useEffect, useState} from 'react';

//이거 안써도 되는데, 이런식으로 react에서 animation 적용하는거 기억하고 싶어서 
const lotate = keyframes`
 0%{
    transform: rotate(0deg);
 }
100%{
    transform: rotate(45deg);
}
`

// const Input = styled.input`
//  border: 1px solid #F8F9FA;
//  width: 20rem;
//  height: 3rem;
//  position: relative;
//  top: 1.5rem;
//  left: 5rem;
//  background-color: white;
//  border: 1px solid #EEF0F2;
//  font-size: 1rem;
// `

// const Todolist = styled.ul`
//    border: 1px solid #F8F9FA;
//   width: 20rem;
//   height: 0rem;
//   position: relative;
//   top: -28rem;
//   left: -12rem;
//   background-color: white;
//   border: 1px solid #EEF0F2;
// //  font-size: 1rem;
// `

const Display = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
 button{
    background-color: white;
 }
 div{
    background-color: white;
 }
`

const Modal = styled.div`
    width: 500px;
    height: 10rem;
    background-color: #F8F9FA;
    position: relative; 
    top:-10.1rem; 
    left: -13rem;
    border-radius: 0px 0px 15px 15px ;
    border-top: 1px solid #F8F9FA;
    z-index: 2;

    input{
         border: 1px solid #F8F9FA;
  width: 20rem;
  height: 3rem;
  position: relative;
  top: 1.5rem;
  left: 5rem;
  background-color: white;
  border: 1px solid #EEF0F2;
  font-size: 1rem;
    }
`

const Button = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #38D9A9;
    position: relative;
    top: 29.4rem;
    left:13rem;
`

const Plusbutton = styled.div`
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        position: relative;
        left: 1.45rem;
        top: 0.2rem;
        font-size: 3.5rem;
        background-color: #38D9A9;
        color: white;
        font-weight: 700;
        animation: cubic-bezier(0.445, 0.05, 0.55, 0.95); 
        z-index: 4;
`

const Closebutton = styled.div`  
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        position: relative;
        left: 1.95rem;
        top: 0.8rem;
        font-size: 3.5rem;
        background-color:#38D9A9;
        color: white;
        font-weight: 700;
        animation: ${lotate} cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards;
        z-index: 4;
`
function Plus(){
    const [description, setDescription] = useState("");
    const [todoList, setTodoList] = useState([]); 
    const [state, setState] = useState(false); 
    const onClick = () =>{
        setState(!state); 
    }

    const handleKeypress = async(e) =>{
        if(e.key === 'Enter'){
            const {data} = await axios.post("http://localhost:3000/todos", {
      description,
      isCompleted : false,
    });
    alert(data.description + "이 추가되었습니다.")
    setDescription("")
        }
    }

    const readList = async () => {
        const {data} = await axios.get("http://localhost:3000/todos");
        setTodoList(data)
      };
  
      useEffect(()=>{
        (async ()=>{
          await readList()
        })();
      },[]);

      const toggleCompleteBtn = async (id, isCompleted) => {
        await axios.patch(`http://localhost:3000/todos/${id}`,{
          isCompleted : !isCompleted
        });
        await readList(); 
      }
      
      const deleteBtn = async (id) =>{
        await axios.delete(`http://localhost:3000/todos/${id}`)
        await readList(); 
      }

    return(
        <div className="modal" data-backdrop = "static">
            <Button onClick={onClick}>
                    {state === true ? <Plusbutton>+</Plusbutton> : <Closebutton>+</Closebutton>}
                {state === false ? (
                <Modal onClick={e=> e.stopPropagation()}>
                    <input type="text" value = {description} onChange={(event)=> setDescription(event.target.value)} placeholder="할 일을 입력 후, Enter를 누르세요" onKeyPress={handleKeypress}></input>
                </Modal>
            ) : null}
            </Button>
            
            <div className="todolist">
        {todoList?.map((todo)=>(
          <div key={todo.id}>
           <Display>
            <button onClick={()=> toggleCompleteBtn(todo.id, todo.isCompleted)}>{todo.isCompleted ? "완료" : "미완료"}</button>
            <div key={todo.id}>{todo.description}</div>
            <button onClick={()=> deleteBtn(todo.id)}>삭제하기</button>
            </Display>
          </div>
        ))}
          </div>
       </div>
    );
};

export default Plus; 