import styled from 'styled-components';

import GYB from 'src/assets/Grow-Your-Business.jpg';

export const HeaderOne = styled.h1`
  font-size: 100px;
  font-weight: bolder;
  color: #ffffff;
  margin-left: 5rem;
  font-family: 'Oswald', sans-serif;
`;

export const Paragraph = styled.p`
  margin-left: 5rem;
  max-width: 50%;
  font-size: 20px;
`;

export const GrowYourBusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${GYB});
  height: 100vh;
  object-fit: contain;
  justify-content: center;
  color: white;
  background-size: cover;
`;
