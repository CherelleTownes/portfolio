import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import vivid from '../../assets/images/vivid-1440.png';
import cathay from '../../assets/images/cathay-1440.jpg';
import hytech from '../../assets/images/hytech-1440.png';
import vividSmall from '../../assets/images/vivid-400.webp';
import cathaySmall from '../../assets/images/cathay-400.webp';
import hytechSmall from '../../assets/images/hytech-400.webp';
import GitHubImg from '../../assets/images/GitHub.png';
import ArrowImg from '../../assets/images/new-window.ico';



const StyledProjects = styled.section`
  padding-top: 75px;
`;

const ProjectContainer = styled.div`
   display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  grid-column-gap: 25px;
  padding:0 20px 150px 20px;
  @media (max-width: 425px) {
    grid-column-gap: 10px;
    padding: 0 10px 75px 10px;
  }
`;

const ProjectImage = styled.a`
  img{ width: 100%;
      border-radius: 10px;
      @media (max-width: 425px) {
        margin-top: 20px;
      }
  };
`;

const Title = styled.h3`
  font-size: 20px;
  color: #F26A4B;
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  padding-bottom: 30px; 
  @media (max-width: 425px) {
    font-size: 11px;
    padding-right: 4px;
  padding-bottom: 10px; 
  }

`;

const TitleCathay = styled.h3`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  color: #F26A4B;
  padding-right: 60px;
  padding-bottom: 30px;
  @media (max-width: 425px) {
    font-size: 11px;
    padding-right: 4px;
  padding-bottom: 10px; 
  }
`;


const DescriptionText = styled.p`
   font-size: 18px;
  color: #F2F2F2;
  font-family: 'Raleway', sans-serif;
  line-height: 35px;
  @media (max-width: 425px) {
    font-size: 10px;
    text-align: justify;
    line-height: 12px;
  }
`;

const TechList = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 20px;
  @media (max-width: 425px) {
    padding-right: 0;
  }
`;

const TechListCathay = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding-right: 30px;
  padding-top: 20px;
`;

const TechItem = styled.li`
font-size: 14px;
color: #F26A4B;
display: inline;
padding-right: 10px;
@media (max-width: 425px) {
  font-size: 8px;
  margin-bottom: 10px;
}
`;

const GitHub = styled.img`
    display: inline-block;
    color:white;
    float: right;
    padding-right: 40px;
    padding-top: 30px;
    @media (max-width: 425px) {
      height: 20px;
      padding-top: 0;
      padding-right: 20px;
    }
`;

const Arrow = styled.img`
    display: inline-block;
    color:white;
    float: right;
    padding-right: 100px;
    padding-top: 30px;
    @media (max-width: 425px) {
      height: 16px;
      padding-top: 0;
      padding-right: 20px;
    }
`;


const CathayGitHub = styled.img`
    display: inline-block;
    color:white;
    padding-right: 40px;
    padding-top: 30px;
    @media (max-width: 425px) {
      height: 20px;
      padding-top: 0;
      padding-left: 10px;
      padding-right: 20px;
    }
`;

const CathayArrow = styled.img`
    display: inline-block;
    color:white;
    padding-right: 100px;
    padding-top: 30px;
    @media (max-width: 425px) {
      height: 16px;
      padding-top: 0;
      padding-right: 10px;
    }
`;

export default function Projects() {
  return (
    <StyledProjects>

      <ProjectContainer>
        <div>
          <ProjectImage href="https://vivid2020.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={vivid}
              srcSet={`${vividSmall} 400w, ${vivid} 1440w`}
              sizes= "(max-width: 425px) 400px, 1440px"
              alt="Vivid" />
          </ProjectImage>
        </div>
        <div>
          <Title>Vivid</Title>
        <DescriptionText>Vivid is a an app to help you fight boredom. This app will suggest an unlimited number of tasks to do when you find yourself bored. The app will list random activities with a random number of participants. The types of activities range from educational, relaxation, cooking, etc. The user will have the option to select if they like the activity or want a different suggestion. There is no reason to have idle time when you have Vivid!</DescriptionText>
        <TechList>
          <TechItem>React</TechItem>
          <TechItem>Ruby</TechItem>
          <TechItem>Ruby on Rails</TechItem>
          <TechItem>Rest API</TechItem>
          </TechList>
          <a href="https://vivid2020.netlify.app/" target="_blank" rel="noopener noreferrer"><Arrow src={ArrowImg} alt="Vivid" /></a>
          <a href="https://github.com/CherelleTownes/Vivid" target="_blank" rel="noopener noreferrer"><GitHub src={GitHubImg} alt="Vivid GitHub" /></a>
        </div>
      </ProjectContainer>


      <ProjectContainer>
      <div>
          <TitleCathay>Cathay-22</TitleCathay>
          <DescriptionText>Worked in tandem with UX design team in order to redesign an existing local restaurant website in New York City. Cathay-22 original restaurant website was created in 1999 using HTML only. As a team, we redesigned the website to make it more modern and user friendly using a one page React app.
           ​</DescriptionText>
        <TechListCathay>
          <TechItem>React</TechItem>
          <TechItem>CSS</TechItem>
          <TechItem>Styled Components</TechItem>
          <TechItem>HTML</TechItem>
          </TechListCathay>
          <a href="https://github.com/CherelleTownes/cathay-22" target="_blank" rel="noopener noreferrer"><CathayGitHub src={GitHubImg} alt="Cathay-22 GitHub" /></a>
          <a href="https://cathay-22.netlify.app/" target="_blank" rel="noopener noreferrer"><CathayArrow src={ArrowImg} alt="Cathay-22" /></a>
        </div>
        <div>
          <ProjectImage href="https://cathay-22.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={cathay}
              srcSet={`${cathaySmall} 400w, ${cathay} 1440w`}
              sizes= "(max-width: 425px) 400px, 1440px"
              alt="Filthy Fashion" />
          </ProjectImage>
        </div>
        </ProjectContainer>
        

      
      <ProjectContainer>
        <div>
          <ProjectImage href="http://hytech.surge.sh/" target="_blank" rel="noopener noreferrer">
            <img src={hytech}
              srcSet={`${hytechSmall} 400w, ${hytech} 1440w`}
              sizes= "(max-width: 425px) 400px, 1440px"
              alt="Hytech" />
          </ProjectImage>
        </div>
        <div>
          <Title>HyTech</Title>
        <DescriptionText>Full-Stack App Development. TechBlog community where users can provide tech input. CRUD on the backend using Express, Mongoose, and MongoDB.</DescriptionText>
        <TechList>
          <TechItem>Express</TechItem>
          <TechItem>MongoDB</TechItem>
          <TechItem>Mongoose</TechItem>
          <TechItem>React</TechItem>
          </TechList>
          <a href="http://hytech.surge.sh/" target="_blank" rel="noopener noreferrer"><Arrow src={ArrowImg} alt="Hytech" /></a>
          <a href="https://github.com/CherelleTownes/hytech-blog" target="_blank" rel="noopener noreferrer"><GitHub src={GitHubImg} alt="Hytech GitHub" /></a>
          </div>
      </ProjectContainer>
      
    </StyledProjects>
  )
}