import React from 'react';
import styled from 'styled-components';
import FilthyFashion from '../../assets/images/filthyfashion-img.png';



const StyledFeatured = styled.section`
 padding-top: 150px;
`;

const FeaturedContainer = styled.div`
   display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 90px;
  justify-items: center;
  align-items: center;
`;

const Label = styled.h1`
  font-size: 32px;
  color: #F2F2F2;
  font-family: 'Raleway', sans-serif;
  text-align: center;
`;

const FeaturedImageContainer = styled.div`
 
`;


const FeaturedImage = styled.a`
`;

const FeaturedDescriptionContainer = styled.div`
  margin-top: -200px;
  width: 92%;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #F26A4B;
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  padding-bottom: 30px;
  
`;


const DescriptionText = styled.p`
  font-size: 20px;
  color: #F2F2F2;
  font-family: 'Raleway', sans-serif;
  line-height: 35px;
`;


const TechList = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 20px;
`;

const TechItem = styled.li`
font-size: 14px;
color: #F26A4B;
display: inline;
padding-right: 20px;
`;

export default function Projects() {
  return (
    <StyledFeatured id="projects" name="projects">
      <Label>Projects</Label>
      <FeaturedContainer>
      <FeaturedImageContainer >
          <FeaturedImage href="http://filthyfashion.surge.sh/"><img src={FilthyFashion} alt="Filthy Fashion" />
          </FeaturedImage>     
      </FeaturedImageContainer>
      <FeaturedDescriptionContainer>
        <Title>Filthy Fashion</Title>
          <DescriptionText>Filthy Fashion is a unique fashion web application where users can create an account and build a clothing item. A user has the option of selecting a dress, skirt, shirt, or bottoms. Once the user selects an item, the user can pick a color they would like the item to be and provide a detailed description of how they would like the item designed. This fashion forward web application gives the user freedom to build clothing items to their hearts desires.</DescriptionText>
          <TechList>
            <TechItem>React</TechItem>
            <TechItem>Ruby</TechItem>
            <TechItem>Ruby on Rails</TechItem>
            <TechItem>Rest API</TechItem>
          </TechList>
        
      </FeaturedDescriptionContainer>
      </FeaturedContainer>
    </StyledFeatured>
  )
}