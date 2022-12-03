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


const Button = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #38D9A9;
    position: absolute;
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
`
function Plus(){
    const [state, setState] = useState(false); 

    const onClick = () =>{
        setState(!state); 
    }

    return(
        <div className="">
            <Button onClick={onClick}>
                    {state === true ? <Plusbutton>+</Plusbutton> : <Closebutton>+</Closebutton>}
            </Button>
       </div>
    );
};

export default Plus; 