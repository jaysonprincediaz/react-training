/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import BG2 from 'src/assets/BG-2.jpg';

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
  text-align: center;
`;

export const WeGotYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${BG2});
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
  border-radius: 8px;
  width: 20rem;
  height: 25rem;
  background-color: #009c9f;
  cursor: pointer;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
    background: #95dada;
    color: black;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150px;
  height: 40%;
  margin-top: 2rem;
`;

export const TextContent = styled.div`
  height: 60%;
  width: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderTwo = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 35px;
`;

export const PTag = styled.p`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  top: 10rem;
  text-align: center;
`;

export const ButtonPrice = styled.button`
  background: #2c2c2c;
  border-radius: 3px;
  border: 2px solid transparent;
  color: #ffffff;
  margin-top: 1rem;
  width: 100%;
  height: 25%;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #009c9f;
  }
`;
