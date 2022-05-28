/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import BG4 from 'src/assets/BG-4.jpg';

export const WeAreCreativeContainer = styled.div`
  height: 100vh;
  background-image: url(${BG4});
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 16%;
`;

export const PTag = styled.p`
  padding: 2rem 0;
  font-size: large;
  color: white;
  width: 57%;
`;

export const HeaderOne = styled.h1`
  font-size: 80px;
  font-weight: bolder;
  font-family: 'Oswald', sans-serif;
  color: white;
`;

export const Button = styled.button`
  background: #2c2c2c;
  border-radius: 3px;
  border: 2px solid transparent;
  color: #ffffff;
  margin-top: 1rem;
  width: 27%;
  height: 8vh;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #009c9f;
  }
`;
