/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import BG1 from 'src/assets/BG1.jpg';

export const HeaderOne = styled.h1`
  font-size: 100px;
  display: grid;
  font-weight: bolder;
  color: #ffffff;
  font-family: 'Oswald', sans-serif;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const Paragraph = styled.p`
  display: grid;
  justify-content: center;
  padding: 0 15rem;
  font-size: 20px;
`;

export const WeGotYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${BG1});
  height: 100vh;
  justify-content: flex-start;
  color: white;
  background-size: cover;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`;

export const CardImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const HeaderThree = styled.h3`
  margin: 1.2rem 0 2rem;
`;
