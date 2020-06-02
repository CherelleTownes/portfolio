import React from 'react';
import styled from 'styled-components';

const StyledContacts = styled.section`
  display: flex;
  flex-direction: column;
 align-items: center;
 padding-bottom: 100px;
 
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

const Button = styled.button`
  background-color: #0D0D0D; 
  color: #F2F2F2; 
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
    margin-top: 20px;
  }
`;




export default function Contact() {
  return (
    <StyledContacts id="contact" name="contact">
      <Label>Contact Me</Label>
      <ContactText>I am always happy to work on new exciting projects! Get in touch!</ContactText>
      <a href="mailto:cherellejobs@gmail.com"><Button>Let's Connect</Button></a>
    </StyledContacts>
    
  )
}