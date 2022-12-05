import React from "react";
import styled from "styled-components";
import Todos from "./Todos";

const Wrapper = styled.div`
    width: 100%;
    height: 32.2rem;
    /* border: 1px solid blue; */
    border-radius : 15px;
    background-color: white;
`

function Todolist(){
    return(
        <Wrapper>
            <Todos></Todos>
        </Wrapper>
    );
}

export default Todolist;  