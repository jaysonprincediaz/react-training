/* eslint-disable react/button-has-type */
/* eslint-disable object-curly-newline */
import React from 'react';

import { IoMdRibbon } from 'react-icons/io';

import {
  WeGotYouContainer,
  HeaderOne,
  Paragraph,
  CardsContainer,
  CardIcon,
  TextContent,
  CardContainer,
  HeaderTwo,
  PTag,
  ButtonPrice,
} from './index.styles';

const Pricing = (): React.ReactElement => {
  return (
    <div>
      <WeGotYouContainer>
        <HeaderOne>PRICING</HeaderOne>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodoconsequat.
        </Paragraph>
        <CardsContainer>
          <CardContainer>
            <CardIcon>
              <IoMdRibbon />
            </CardIcon>

            <TextContent>
              <HeaderTwo>BASIC</HeaderTwo>
              <PTag>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PTag>
              <ButtonPrice>$150.00</ButtonPrice>
            </TextContent>
          </CardContainer>
          <CardContainer>
            <CardIcon>
              <IoMdRibbon />
            </CardIcon>

            <TextContent>
              <HeaderTwo>PROFESSIONAL</HeaderTwo>
              <PTag>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PTag>
              <ButtonPrice>$200.00</ButtonPrice>
            </TextContent>
          </CardContainer>
          <CardContainer>
            <CardIcon>
              <IoMdRibbon />
            </CardIcon>

            <TextContent>
              <HeaderTwo>ULTIMATE</HeaderTwo>
              <PTag>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PTag>
              <ButtonPrice>$250.00</ButtonPrice>
            </TextContent>
          </CardContainer>
        </CardsContainer>
      </WeGotYouContainer>
    </div>
  );
};

export default Pricing;
