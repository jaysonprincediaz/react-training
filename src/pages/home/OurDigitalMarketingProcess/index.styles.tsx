/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import BG7 from 'src/assets/BG-7.jpg';

export const Container = styled.div`
  background-image: url(${BG7});
  height: 100vh;
  color: white;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PTag = styled.p`
  margin-top: 18%;
  font-size: 35px;
  width: 60%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const HeaderOne = styled.h1`
  margin-top: 5%;
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
`;
