/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import BG1 from 'src/assets/BG-1.jpg';

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

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin-top: 3%;
`;

export const CardContainer = styled.div`
  border-radius: 2px;
  width: 20rem;
  height: 25rem;
  background-color: #303030;
  cursor: pointer;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
    background: #95dada;
    color: black;
  }
`;

export const CardImage = styled.div`
  height: 60%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContent = styled.div`
  height: 40%;
  width: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderTwo = styled.h2`
  margin: auto;
`;

export const PTag = styled.p`
  display: flex;
  justify-content: center;
  margin-left: 20px;
`;
