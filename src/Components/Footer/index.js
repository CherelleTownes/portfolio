import React from 'react';
import styled from 'styled-components';
import GitHubImg from '../../assets/images/GitHub.png';

const StyledFooter = styled.section`
  width: 100%;
  height: 40px;
  background-color: #191919;
`;

const FooterText = styled.p`
  font-size: 12px;
  color: #F26A4B;
  float: right;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  padding-top: 10px;
  padding-right: 15px;
`;

const GitHub = styled.img`
    display: inline-block;
    color:white;
    float: right;
    padding-right: 50px;
    @media (max-width: 425px) {
      height: 28px;
      padding-top: 5px;
    }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/CherelleTownes" target="_blank" rel="noopener noreferrer"><GitHub src={GitHubImg} alt="GitHub" /></a>
      <FooterText>Designed and Created by Cherelle Townes</FooterText>
    </StyledFooter>

  )
}