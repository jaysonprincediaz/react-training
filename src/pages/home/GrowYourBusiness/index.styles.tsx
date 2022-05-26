import styled from 'styled-components';

import GYB from 'src/assets/Grow-Your-Business.jpg';

export const HeaderView = styled.div`
  max-height: 100vh;
`;

export const HundredView = styled.div`
  height: 100vh;
`;

export const HeaderOne = styled.h1`
  font-size: 50px;
  font-weight: bolder;
  color: #ffffff;
`;

export const GrowYourBusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${GYB});

  height: 100vh;
  object-fit: contain;
  justify-content: center;
  color: white;
`;
