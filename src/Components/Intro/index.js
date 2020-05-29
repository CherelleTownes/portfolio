import React from 'react';
import styled from 'styled-components';

const StyledIntro = styled.section`
   height: 600px;
   width: 100%;
   padding-left: 50px;
   padding-top: 200px;
  
`;


const TopText = styled.h3`
   font-size: 18px;
   font-weight: 500;
    color: #F26A4B;
`;

const NameText = styled.h1`
    font-size: 95px;
    font-weight: 600;
    color: #F2F2F2;
    font-family: 'Raleway', sans-serif;
    padding-top: 30px;
`;

const BottomText = styled.h1`
    font-size: 60px;
    font-weight: 600;
    color: #F2F2F2;
    font-family: 'Raleway', sans-serif;
    padding-top: 10px;
`;

const IntroText = styled.p`
width: 60%;
  font-size: 18px;
  color: #F2F2F2;
  font-family: 'Raleway', sans-serif;
  line-height: 30px;
  padding-top: 30px;
`;


export default function Intro() {
  return (
    <StyledIntro>
      <TopText>Hi and Welcome! My name is</TopText>
      <NameText>Cherelle Townes.</NameText>
      <BottomText>Software Engineer & Technical Project Manager</BottomText>
      <IntroText>I am an accomplished and results-oriented Software Engineer and United States Air Force Veteran based out of New York City. I break down multifaceted software issues into intuitive solutions.</IntroText>
    </StyledIntro>
  )
}
