import React from 'react';
import styled from 'styled-components';
import FilthyFashion from '../../assets/images/filthyfashion-1440.png';
import FilthyFashionSmall from '../../assets/images/filthy-fashion-400.webp';
import GitHubImg from '../../assets/images/GitHub.png';
import ArrowImg from '../../assets/images/new-window.ico';


const StyledFeatured = styled.section`
 padding-top: 150px;
 @media (max-width: 425px) {
    padding-top: 100px;
  }
`;

const FeaturedContainer = styled.div`
   display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 90px;
  justify-items: center;
  align-items: center;
  @media (max-width: 425px) {
    padding-left: 5px;
    padding-top: 40px;
  }
`;

const Label = styled.h1`
  font-size: 32px;
  color: #F2F2F2;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const FeaturedImageContainer = styled.div`
 
`;


const FeaturedImage = styled.a`
  @media (max-width: 425px) {
     img {width: 100%;}
  }

`;

const FeaturedDescriptionContainer = styled.div`
  margin-top: -200px;
  width: 92%;
  @media (max-width: 425px) {
    margin-top: 0;
  
  }
`;

const Title = styled.h3`
  font-size: 18px;
  color: #F26A4B;
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  padding-bottom: 30px;
  @media (max-width: 425px) {
    font-size: 10px;
    padding-right: 4px;
  padding-bottom: 10px;
  }
`;

const FeaturedText = styled.p`
  font-size: 14px;
color: #F26A4B;
display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  padding-bottom: 10px;
  @media (max-width: 425px) {
    font-size: 8px;
    padding-right: 4px;
  padding-bottom: 10px;
  }
`;


const DescriptionText = styled.p`
  font-size: 20px;
  color: #F2F2F2;
  font-family: 'Raleway', sans-serif;
  line-height: 35px;
  @media (max-width: 425px) {
    font-size: 10px;
    line-height: 16px;
    text-align: justify;
  }
  
`;


const TechList = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 20px;
  @media (max-width: 425px) {
    padding-right: 0px;
  padding-top: 10px;
  }
  
`;

const TechItem = styled.li`
font-size: 14px;
color: #F26A4B;
display: inline;
padding-right: 20px;
@media (max-width: 425px) {
    font-size: 8px;
    padding-right: 4px;
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
      height: 12px;
      padding-top: 0;
      padding-right: 10px;
      
    }
`;

const Arrow = styled.img`
    display: inline-block;
    color:white;
    float: right;
    padding-right: 100px;
    padding-top: 30px;
    @media (max-width: 425px) {
      height: 10px;
      padding-top: 0;
      padding-right: 20px;
    }
`;

export default function Projects() {
  return (
    <StyledFeatured id="projects" name="projects">
      <Label>Projects</Label>
      <FeaturedContainer>
      <FeaturedImageContainer >
          <FeaturedImage href="http://filthyfashion.surge.sh/" target="_blank" rel="noopener noreferrer">
            <img src={FilthyFashion}
              srcSet={`${FilthyFashionSmall} 400w, ${FilthyFashion} 1440w`}
              sizes= "(max-width: 425px) 400px, 1440px"
                alt = "Filthy Fashion" />
          </FeaturedImage>     
      </FeaturedImageContainer>
        <FeaturedDescriptionContainer>
          <FeaturedText>Featured Project</FeaturedText>
        <Title>Filthy Fashion</Title>
          <DescriptionText>Filthy Fashion is a unique fashion web application where users can create an account and build a clothing item. A user has the option of selecting a dress, skirt, shirt, or bottoms. Once the user selects an item, the user can pick a color they would like the item to be and provide a detailed description of how they would like the item designed. This fashion forward web application gives the user freedom to build clothing items to their hearts desires.</DescriptionText>
          <TechList>
            <TechItem>React</TechItem>
            <TechItem>Ruby</TechItem>
            <TechItem>Ruby on Rails</TechItem>
            <TechItem>Rest API</TechItem>
          </TechList>
          <a href="http://filthyfashion.surge.sh/" target="_blank" rel="noopener noreferrer"><Arrow src={ArrowImg} alt="Filthy Fashion" /></a>
          <a href="https://github.com/CherelleTownes/Filthy-Fashion" target="_blank" rel="noopener noreferrer"><GitHub src={GitHubImg} alt="Filthy Fashion GitHub" /></a>
      </FeaturedDescriptionContainer>
      </FeaturedContainer>
    </StyledFeatured>
  )
}