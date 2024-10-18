import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  margin: 0 0 10px 0;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 5px;
  }
`;

const Description = styled.div`
  text-align: justify;
  
  p {
    margin-bottom: 15px;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <AboutContainer>
      <ProfileSection>
        <ProfileImage src="src\assets\Personal Photo.png" alt="Andres Mauricio Bueno Peña" />
        <ProfileInfo>
          <Name>Andres Bueno</Name>
          <SocialLink href="https://www.linkedin.com/in/andres-mauricio-bueno-pe%C3%B1a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/andresbueno" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </SocialLink>
        </ProfileInfo>
      </ProfileSection>
      <Description>
        <p>
          I'm a Systems Engineer with expertise in Android development using Kotlin, Jetpack, Jetpack Compose, and Material Design 3, as well as web development using React.js, PHP, JavaScript, TypeScript, HTML, CSS, and MySQL databases. I've dedicated over 4 years to frontend projects as a freelance developer, working in healthcare, pet industry, restaurants, and more. Additionally, I spent 2 years at Inversiones Daniel updating an application responsible for distributing lottery numbers to sellers. I also spent another 2 years working on a waiter application project at Pocket Company for order taking and generating the bill using Kotlin, Material Design, GraphQL and Jetpack Compose.
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