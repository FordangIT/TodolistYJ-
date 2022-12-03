import styled from "styled-components";
import React from "react";
import Count from "./Count";

import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // 윤년 판단 플러그인
import 'dayjs/locale/ko'; // 한국어 가져오기

console.log(dayjs().format("YYYY년 MM월 DD일"))
dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale('ko'); // 언어 등록

const Wrapper = styled.div`
padding-bottom: 30px;
 background-color: white;
 border-bottom: 2px solid rgb(233,236,239);
`

const Datecontent = styled.h1`
    color: black; 
    background-color: white;
    margin-top: 20px;
    padding: 30px 30px 0px 30px;
`
const DayContent = styled.h2`
    color: #a0a0a0;
    background-color: white;
    font-size :1.5rem ;
    padding: 5px 0 40px 30px;
`

function Date(){
    return (
        <>
        <Wrapper>
        <Datecontent>
            {dayjs().format("YYYY년 MM월 DD일")}
        </Datecontent>
        <DayContent>
            {dayjs().format("dddd")}
        </DayContent>
        <Count/>
        </Wrapper>
        </>
    );
};

export default Date; 