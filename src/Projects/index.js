import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import cathay from '../../assets/images/cathay-img.webp';
import FilthyFashion from '../../assets/images/filthyfashion-img.webp';
import FilthyFashion2 from '../../assets/images/filthyfashion-img.png';
import hytech from '../../assets/images/hytech-img.webp';
import hytech2 from '../../assets/images/hytech-img.png';
import vivid from '../../assets/images/vivid-img.webp';


const StyledFeatured = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 100px;
`;

const FeaturedImageContainer = styled.div`

`;


const ProjectImage = styled.a`
  /* img{height: 600px}; */
`;

const ProjectDescriptionContainer = styled.div`

`;

const DescriptionTextContainer = styled.div`

`;

const DescriptionText = styled.p`
  font-size: 14px;
`;

const TechList = styled.ul`

`;

const TechItem = styled.li`

`;

export default function Projects() {
  return (
    <StyledProjects>
      <ProjectImageContainer>
        <ProjectImage href="http://filthyfashion.surge.sh/"><img src={FilthyFashion} alt="Filthy Fashion" /></ProjectImage>
        <ProjectImage href="http://filthyfashion.surge.sh/"><img src={FilthyFashion2} alt="Filthy Fashion" /></ProjectImage>
        <ProjectImage href="http://filthyfashion.surge.sh/"><img src={hytech} alt="Filthy Fashion" /></ProjectImage>
        <ProjectImage href="http://filthyfashion.surge.sh/"><img src={hytech2} alt="Filthy Fashion" /></ProjectImage>
      
      </ProjectImageContainer>
    </StyledProjects>
  )
}