/* eslint-disable object-curly-newline */
import React from 'react';

import ImageOne from 'src/assets/second.jpg';
import ImageTwo from 'src/assets/fifth.png';
import ImageThree from 'src/assets/third.jpg';

import {
  WeGotYouContainer,
  HeaderOne,
  Paragraph,
  CardsContainer,
  CardImage,
  Image,
  TextContent,
  CardContainer,
  HeaderTwo,
  PTag,
} from './index.styles';

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
        <CardsContainer>
          <CardContainer>
            <CardImage>
              <Image src={ImageOne} alt="img" />
            </CardImage>

            <TextContent>
              <HeaderTwo>INSIGHTS</HeaderTwo>
              <PTag>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PTag>
            </TextContent>
          </CardContainer>

          <CardContainer>
            <CardImage>
              <Image src={ImageTwo} alt="img" />
            </CardImage>

            <TextContent>
              <HeaderTwo>CREATIVITY</HeaderTwo>
              <PTag>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PTag>
            </TextContent>
          </CardContainer>

          <CardContainer>
            <CardImage>
              <Image src={ImageThree} alt="img" />
            </CardImage>

            <TextContent>
              <HeaderTwo>GROWTH</HeaderTwo>
              <PTag>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PTag>
            </TextContent>
          </CardContainer>
        </CardsContainer>
      </WeGotYouContainer>
    </div>
  );
};

export default WeGotYou;
