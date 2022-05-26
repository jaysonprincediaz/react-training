/* eslint-disable object-curly-newline */
import React from 'react';

import CardOne from 'src/assets/second.jpg';

import { WeGotYouContainer, HeaderOne, Paragraph, CardContainer, CardImage, HeaderThree } from './index.styles';

const WeGotYou = (): React.ReactElement => {
  return (
    <div>
      <WeGotYouContainer>
        <HeaderOne>WE GOT YOU</HeaderOne>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodoconsequat.
        </Paragraph>
        <CardContainer>
          <CardImage>
            <img src={CardOne} alt="" />
          </CardImage>
          <HeaderThree>INSIGHTS</HeaderThree>
          <div>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </CardContainer>
      </WeGotYouContainer>
    </div>
  );
};

export default WeGotYou;
