import styled, {keyframes} from "styled-components";
import React from "react";
import { useState } from "react";

//이거 안써도 되는데, 이런식으로 react에서 animation 적용하는거 기억하고 싶어서 
const lotate = keyframes`
 0%{
    transform: rotate(0deg);
 }
100%{
    transform: rotate(45deg);
}
`

const Submit = styled.button`

`

const Input = styled.input`
 border: 1px solid #F8F9FA;
 width: 20rem;
 height: 3rem;
 position: relative;
 top: 1.5rem;
 left: 5rem;
 background-color: white;
 border: 1px solid #EEF0F2;
 font-size: 1rem;
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
`

const Button = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #38D9A9;
    position: absolute;
    z-index: 3;
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
    const [state, setState] = useState(false); 
    const [content, setContent] = useState(""); 
    const onClick = () =>{
        setState(!state); 
    }

    const onChange = (e) => {
        setContent(e.target.value);
    }

    const handleKeypress = (e) =>{
        if(e.key === 'Enter'){
            alert('성공')
            setContent("")
            setState(!state)
        }
    }

    return(
        <div className="modal" data-backdrop = "static">
            <Button onClick={onClick}>
                    {state === true ? <Plusbutton>+</Plusbutton> : <Closebutton>+</Closebutton>}
                {state === true ? (
                <Modal onClick={e=> e.stopPropagation()}>
                        <Input onChange = {onChange} value={content} onKeyPress={handleKeypress} placeholder={'할 일을 입력 후, Enter를 누르세요'}/>
                </Modal>
            ) : null}
            </Button>
       </div>
    );
};

export default Plus; 