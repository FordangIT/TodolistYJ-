import React from "react";
import styled from "styled-components";

const Boardplay = styled.div`
    width: 500px;
    height: 500px;
    background-color: red;
`

function Board(){
    return(
        <Boardplay/>
    );
};

export default Board;