import styled, {keyframes} from "styled-components";
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Count from "./Count";

import { Icon } from '@iconify/react';



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

const Board = styled.div`
  padding-top: 5rem;
  background-color: white;
  width: 500px;
  height: 320px;
  position: relative;
  top: 1rem;
  overflow-y: scroll;
`

const Header = styled.div`
 background-color: transparent;
 border-bottom: 2px solid rgb(233,236,239);
 padding-bottom: 10px; 
`

const Display = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 2.5rem ;
    position: relative;
    top: -4.5rem; 
 button{
    background-color: white;
    font-size: 2rem;
    border: none;
 }
 .trashcan{
  position: relative;
   right: 1rem;
   color: black;
   background: #FFF;
   &:hover{
    color: red; 
   }
 }
 .circle{
  color: black;
  position: relative;
   left: 1rem;
  &:hover{
    color:#38D9A9;
  }
 }
 .usertodo{
    background-color: white;
    font-size: 1.5rem;
 }
`

const Modal = styled.div`
    width: 500px;
    height: 10rem;
    background-color: #F8F9FA;
    position: relative; 
    top: -12.3rem; 
    left: -13rem;
    border-radius: 0px 0px 15px 15px ;
    border-top: 1px solid #F8F9FA;
  

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
    top: 6rem;
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
        transform: rotate(0.5turn);
    span{
      background-color: #38D9A9;
      position:relative;
      top: -1.6rem;
      right: -0.9rem;
    }
        
`

const Closebutton = styled.div`  
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        position: relative;
        top: 0rem;
        font-size: 3.5rem;
        background-color:#FF6B6B;
        color: white;
        font-weight: 700;
        z-index: 3;
        text-align:center;
        transform: rotate(0.5turn);
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
            const {data} = await axios.post("http://localhost:3002/todos", {
      description,
      isCompleted : false,
    });
    setDescription("")
    refreshPage(); 
        }
    }

    const readList = async () => {
        const {data} = await axios.get("http://localhost:3002/todos");
        setTodoList(data)
      };
  
      useEffect(()=>{
        (async ()=>{
          await readList()
        })();
      },[]);

      const toggleCompleteBtn = async (id, isCompleted) => {
        await axios.patch(`http://localhost:3002/todos/${id}`,{
          isCompleted : !isCompleted
        });
        await readList(); 
      }
      
      const deleteBtn = async (id) =>{
        await axios.delete(`http://localhost:3002/todos/${id}`)
        await readList(); 
      }

      const refreshPage = () =>{
        window.location.reload(); 
      }

    return(
      <>
      <Header>
           <Count todoList = {todoList}/>
     </Header>
     <Board>
        {todoList?.map((todo)=>(
           <Display>
            <button className="circle" onClick={()=> toggleCompleteBtn(todo.id, todo.isCompleted)}>{todo.isCompleted ?  <Icon icon="material-symbols:check-circle-outline-rounded" /> : <Icon icon="material-symbols:circle-outline" />}</button>
            <div className="usertodo" key={todo.id}>{todo.description}</div>
            <button className="trashcan" onClick={()=> deleteBtn(todo.id)}><Icon icon="mdi:trashcan-outline" /></button>
            </Display>
        ))}
        </Board>
        <Button onClick={onClick}>
                    {state === true ?  <Plusbutton><span>+</span></Plusbutton> : <Closebutton>x</Closebutton> }
                {state === false ? (
                <Modal onClick={e=> e.stopPropagation()}>
                    <input type="text" value = {description} onChange={(event)=> setDescription(event.target.value)} placeholder="할 일을 입력 후, Enter를 누르세요" onKeyPress={handleKeypress} autoFocus></input>
                </Modal>
            ) : null}
            </Button>
       </>
    );
};

export default Plus; 