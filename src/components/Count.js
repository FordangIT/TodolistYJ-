import styled from "styled-components";
import React from "react";

const CountDay = styled.span`
  color:rgb(32,201,151);
  margin-left: 30px;
  margin-bottom: 30px;
  background-color: white;
  font-weight: bold; 

`

function Count({todoList}){
    return (
      <CountDay>
        {`오늘 할 일 ${todoList.length}개`}
      </CountDay>
    )
}

export default Count;