/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2c2c2c;
  height: 100vh;
  color: white;
`;

export const UpperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const HeaderOne = styled.h1`
  margin-top: 5%;
  font-size: 80px;
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
`;

export const PTag = styled.p`
  font-size: large;
`;

export const LowerContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem;
  padding: 2rem;
`;

export const LowerHeader = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  font-size: 80px;
  margin: auto;
`;

export const LowerPtag = styled.p`
  font-size: 35px;
`;
