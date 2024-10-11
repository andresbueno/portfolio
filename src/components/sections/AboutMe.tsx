import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h1`
  margin: 0;
`;

const Description = styled.div`
  text-align: justify;
  max-width: 800px;
  
  p {
    margin-bottom: 15px;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <AboutContainer>
      <ProfileSection>
        <ProfileImage src="https://via.placeholder.com/200" alt="Andres Mauricio Bueno Peña" />
        <Name>Andres Bueno</Name>
      </ProfileSection>
      <Description>
        <p>
          I'm a Systems Engineer with expertise in Android development using Kotlin, Jetpack, Jetpack Compose, and Material Design 3, as well as web development using React.js, PHP, JavaScript, Python, HTML, CSS, and MySQL databases. I've dedicated over 4 years to frontend projects as a freelance developer, working in healthcare, pet industry, restaurants, and more. Additionally, I spent 2 years at Inversiones Daniel updating an application responsible for distributing lottery numbers to sellers. I also spent another 2 years working on a waiter application project at Pocket Company for order taking and generating the bill using Kotlin, Material Design, GraphQL and Jetpack Compose.
        </p>
        <p>
          In addition to my technical background, I'm an experienced educator with over four years of teaching in mathematics, physics, technology, and software development. I excel in group management, demonstrate patience, possess strong time management skills, and employ effective teaching methods. My ability to learn quickly is a distinct advantage.
        </p>
        <p>
          I'm eager to contribute my skills to a dynamic software development team, offering a unique combination of technical proficiency and teaching experience. My attributes include patience, responsibility, efficient time management, and fast learning.
        </p>
      </Description>
    </AboutContainer>
  );
};

export default AboutMe;