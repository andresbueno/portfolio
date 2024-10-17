import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .experience-item {
    margin-bottom: 20px;
  }
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <h1>Experience</h1>
      <div className="experience-item">
        <h2>Freelancer - Android and Frontend React Developer </h2>
        <h5>Mar 2020 – Present</h5>
        <ul>
          <li>Design and develop Android applications using Kotlin, Jetpack, Jetpack Compose, and Material Design 3.</li>
          <li>Develop responsive web interfaces using React.js according to customer requirements.</li>
          <li>Integrate GraphQL APIs for efficient data querying and manipulation.</li>
        </ul>
        <p>Tech stack: Kotlin, Jetpack, Jetpack Compose, Material Design 3, GraphQL, React.js, JavaScript, HTML, CSS</p>
      </div>
      <div className="experience-item">
        <h2>Pocket Company - Software Developer.</h2>
        <h5>Jul 2021 – Aug 2023</h5>
        <ul>
          <li>Developed a restaurant application for Android, enabling waitstaff to efficiently manage orders including order
placement, tracking, and bill calculation.
</li>
          <li>Created user-friendly interfaces for both mobile and web platforms to streamline restaurant operations.
          </li>
          <li>Implemented Material Design principles for a consistent and modern user experience.</li>
          <li>Integrated GraphQL for real-time data updates.</li>
        </ul>
        <p>Tech stack: Kotlin, Jetpack, Jetpack Compose, Material Design, GraphQL, React.js, JavaScript, HTML, CSS, MySQL</p>
      </div>
      <div className="experience-item">
        <h2>Inversiones Daniel - Software Developer</h2>
        <h5>Jan 2019 - Mar 2021</h5>
        <ul>
          <li>Developed a mobile ticket management application for betting and raffles, assigning numbers to sellers,
          calculating their financial responsibilities, commissions, and final profits.</li>
          <li>Enhanced the application for both Android and web platforms.
          </li>
          <li>Implemented Material Design for the Android app.</li>
          <li>Integrated GraphQL for efficient data querying.
          </li>
        </ul>
        <p>Tech stack: Kotlin, Jetpack, Jetpack Compose, Material Design, GraphQL, React.js, JavaScript</p>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;