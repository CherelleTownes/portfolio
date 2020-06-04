import React from 'react';
import styled from 'styled-components';
import GitHubImg from '../../assets/images/GitHub.png';
import LinkedinImg from '../../assets/images/linkedin.ico';


const StyledFooter = styled.section`
  width: 100%;
  height: 40px;
  background-color: #191919;
`;

const FooterText = styled.p`
  font-size: 12px;
  color: #F26A4B;
  float: left;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  padding-top: 10px;
  padding-left: 15px;
`;

const GitHub = styled.img`
    display: inline-block;
    color:white;
    float: right;
    padding-right: 50px;
    padding-top: 5px;
    @media (max-width: 425px) {
      height: 28px;
      padding-top: 5px;
    }
`;

const LinkedIn = styled.img`
    display: inline-block;
    color:white;
    float: right;
    padding-right: 20px;
    padding-top: 5px;
    @media (max-width: 425px) {
      height: 28px;
      padding-top: 5px;
    }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/CherelleTownes" target="_blank" rel="noopener noreferrer"><GitHub src={GitHubImg} alt="GitHub" /></a>
      <a href="https://www.linkedin.com/in/cherelle-townes/" target="_blank" rel="noopener noreferrer"><LinkedIn src={LinkedinImg} alt="GitHub" /></a>
      <FooterText>Designed and Created by Cherelle Townes</FooterText>
    </StyledFooter>

  )
}