import React from "react";
import styled from "styled-components";
import Plus from "../components/Plus";
import Date from "../components/Date";
import Todo from "../todocomponents/Todo";
import Write from "../components/Write";

const Wrapper = styled.div`
  width: 500px;
  height: 750px;
  border-radius: 15px;
  background-color: white; 
  //세로로 가운데 정렬 
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  /* -1/2 width */
  margin-top: -375px;
  /* -1/2 height */
`

function Main() {
  return (
    <>
    <div className="motherplace">
      <Wrapper>
            <div className="place">
              <Plus/>
            </div>
        <Date/>
        <Todo/>
      </Wrapper>
   </div>
    </>
  );
}

export default Main;
