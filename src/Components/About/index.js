import React from 'react';
import styled from 'styled-components';
import PortfolioImage from '../../assets/images/portfolio-pic.jpg'




const StyledAbout = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 100px;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 7fr;
  justify-items: center; 
`;

const Description = styled.div`
  width: 90%;
  text-align: center;
  line-height: 35px;
`;


const Title = styled.h1`
    font-size: 32px;
    color: #F2F2F2;
    font-family: 'Raleway', sans-serif;

`;

const Vector = styled.hr`
  width: 450px;
  height: 1px;
  border: solid 1px #F26A4B;
`;

const AboutText = styled.p`
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  color: #F2F2F2;
  margin-top: -20px;
`;

const SkillsText = styled.p`
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: #F2F2F2;
  padding-top: 15px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 100px;

`;

const ListItem = styled.li`
  font-size: 14px;
  color: #F2F2F2;
  padding-bottom: 5px;
  ::before{
    content:'❯'; 
    color: #F23005;
    padding-right: 3px;
  }
`;

const ImageContainer = styled.div`
  width: 96%;
  align-self: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10em;
`;
export default function About() {
  return (
    <StyledAbout id="about" name="about">
      <TextContainer>
        <Title>About Me</Title>
        <Vector />
        <Description>
          <AboutText>Hello! I'm Cherelle, a United States Air Force veteran turned Software Engineer based out of New York City.<br /> For over 13-years, I trained Aerospace medical teams on how to use complex technical systems. Now, as a Software Engineer, I take the same systematic approach in breaking down multifaceted software issues into intuitive solutions. I seek the opportunity to merge my experience in management and Full-Stack Development to work collaboratively with cross-functional teams to build forward-thinking technology products that help individuals and enterprise organizations maximize efficiency.
        </AboutText>
          <SkillsText>Here are a few of my skills and technologies I have been working with:</SkillsText>
        </Description>
        <List>
          <ListItem>React</ListItem>
          <ListItem>Ruby</ListItem>
          <ListItem>Ruby on Rails</ListItem>
          <ListItem>Express JS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>SQL</ListItem>
          <ListItem>MongoDB</ListItem>
          <ListItem>REST API</ListItem>
          <ListItem>PostgreSQL</ListItem>
        </List>
      </TextContainer>
      <ImageContainer>
        <Image src={PortfolioImage} />
      </ImageContainer>
    </StyledAbout>
  )
}