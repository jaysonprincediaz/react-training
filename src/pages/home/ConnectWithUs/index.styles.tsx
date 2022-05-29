/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import BG8 from 'src/assets/BG-5.jpg';

export const ContactContainer = styled.div`
  background-image: url(${BG8});
  height: 100vh;
  color: white;
`;

export const UpperContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const UpperHeader = styled.h1`
  margin-top: 8rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 60px;
`;

export const UpperPTag = styled.p`
  margin: 3rem;
  font-size: larger;
  width: 60%;
  text-align: center;
`;

export const Input = styled.input`
  width: 450px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  border-color: transparent;
`;

export const Button = styled.button`
  background: #2c2c2c;
  border: 2px solid transparent;
  color: #ffffff;
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
    background-color: #2c2c2c;
    color: #009c9f;
  }
`;

export const LowerContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const LowerLeftContent = styled.div`
  width: 800px;
  margin-top: 8%;
`;

export const LowerLeftPTag = styled.p`
  margin: 1.5rem 0;
`;

export const LowerRightContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 8%;
`;

export const LRCHeader = styled.h2`
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    color: #009c9f;
  }
`;

export const LRCServices = styled.div`
  margin: 0 2.5rem;
`;

export const PTag = styled.p`
  margin: 0.5rem 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    color: #009c9f;
  }
`;

export const Icons = styled.div`
  font-size: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 10%;
  margin-left: 10%;
`;

export const MarginIcons = styled.div`
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    color: #009c9f;
  }
`;

// export const ButtonContainer = styled.div`
//   display: flex;
//   text-decoration: none;
//   color: inherit;
//   max-width: 400px;
//   position: relative;
//   padding: 2rem;
//   cursor: pointer;
//   &:before {
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     content: '';
//     display: block;
//     width: 100%;
//     height: 100%;
//     background-color: #000;
//     transform-origin: 0 bottom 0;
//     transform: scaleY(0);
//     transition: 0.4s ease-out;
//   }

//   &:hover {
//     .post-title {
//       color: #fff;
//     }
//     &:before {
//       transform: scaleY(1);
//     }
//   }
// `;

// export const Button = styled.button`
//   position: relative;
//   font-size: 2rem;
//   font-weight: 700;
//   line-height: 1.333;
//   transition: 0.4s ease-out;
// `;
