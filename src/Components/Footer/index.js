import React from 'react';
import styled from 'styled-components';

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
  padding-right: 50px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterText>Designed and Created by Cherelle Townes</FooterText>
    </StyledFooter>

  )
}