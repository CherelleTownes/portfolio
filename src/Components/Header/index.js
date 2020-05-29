import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import logo from '../../assets/images/Logo.png';
import resume from '../../assets/resume/resume.pdf';


const StyledHeader = styled.header`
    height: 100px;
    width: 100%;
    padding-top: 20px;
    position: fixed;
   background-color: #0D0D0D;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding-left: 65px;
  padding-right: 30px;

`;

const Logo = styled(Link)`
  img {height: 55px}
`;

const NavLink = styled(Scroll.Link)`
  font-size: 20px;
  text-decoration: none;
  color: #F26A4B;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #0D0D0D; 
  color: #F2F2F2; 
  font-family:'Orbitron', sans-serif;
  border: 1px solid #F2F2F2;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
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

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo to exact="/"><img src={logo} alt="Logo"></img></Logo>
        <NavLink to="about" spy={true} smooth={true} offset={90} duration={700}>
          About
          </NavLink>
        <NavLink to="projects" spy={true} smooth={true} offset={140} duration={700}>
          Projects
          </NavLink>
        <NavLink to="contact" spy={true} smooth={true} offset={240} duration={900}>
          Contact
        </NavLink>
        <a href = {resume} target = "_blank"><Button>Resume</Button></a>
      </Nav>
    </StyledHeader>
    
  )
}