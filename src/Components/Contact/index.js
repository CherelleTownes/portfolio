import React from 'react';
import styled from 'styled-components';
import resume from '../../assets/resume/resume.pdf';

const StyledContacts = styled.section`
  display: flex;
  flex-direction: column;
 align-items: center;
 padding-bottom: 200px;
 @media (max-width: 425px) {
   padding-top: 50px;
   padding-bottom: 150px;
 }
 
`;

const Label = styled.h2`
  font-size: 32px;
  color:#F26A4B;
  padding-bottom: 40px;
  @media (max-width: 425px) {
    font-size: 16px;
    padding-bottom: 20px;
  }
`;

const ContactText = styled.p`
  font-size: 18px;
  color: #F2F2F2; 
  font-family: 'Raleway', sans-serif;
  padding-bottom: 20px;
  @media (max-width: 425px) {
    font-size: 12px;
    padding-bottom: 0;
  }
`;

const EmailButton = styled.button`
  background-color: #0D0D0D; 
  color: #F2F2F2; 
  font-family:'Orbitron', sans-serif;
  border: 1px solid #F2F2F2;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  margin: 30px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
  background-color: #F26A4B;
  color: white;
  }
  @media (max-width: 425px) {
    padding: 0px 16px;
    font-size: 14px;
    margin-top: 20px;
  }
`;
 

const ResumeButton = styled.button`
  background-color: #F2F2F2; 
  color: #0D0D0D;
  font-family:'Orbitron', sans-serif;
  border: 1px solid #F2F2F2;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
  background-color: #F26A4B;
  color: white;
  }
  @media (max-width: 425px) {
    padding: 0px 16px;
    font-size: 14px;
  
  }
`;



export default function Contact() {
  return (
    <StyledContacts id="contact" name="contact">
      <Label>Contact Me</Label>
      <ContactText>I am always happy to work on new exciting projects! Get in touch!</ContactText>
      <a href="mailto:cherellejobs@gmail.com"><EmailButton>Let's Connect</EmailButton></a>
      <a href = {resume} target = "_blank" rel="noopener noreferrer"><ResumeButton>Download My Resume Here</ResumeButton></a>
    </StyledContacts>
    
  )
}