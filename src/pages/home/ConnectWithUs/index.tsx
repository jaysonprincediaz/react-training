/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';

import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

import {
  ContactContainer,
  UpperContent,
  UpperHeader,
  UpperPTag,
  LowerContent,
  LowerRightContent,
  LowerLeftContent,
  LowerLeftPTag,
  LRCHeader,
  LRCServices,
  PTag,
  Input,
  Button,
  Form,
  Icons,
  MarginIcons,
} from './index.styles';

const ConnectWithUs = () => {
  return (
    <ContactContainer>
      <UpperContent>
        <UpperHeader>CONNECT WITH US</UpperHeader>
        <UpperPTag>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco.
        </UpperPTag>
        <Form>
          <Input aria-label="Your email address" placeholder="Your email address" type="email" />
          <Button>SUBSCRIBE</Button>
        </Form>
      </UpperContent>
      <LowerContent>
        <LowerLeftContent>
          <LRCHeader>EGG ONE DEV</LRCHeader>
          <LowerLeftPTag>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat
            nulla pariatur.
          </LowerLeftPTag>
          <Icons>
            <MarginIcons>
              <AiFillInstagram />
            </MarginIcons>
            <MarginIcons>
              <BsFacebook />
            </MarginIcons>
            <MarginIcons>
              <AiFillTwitterCircle />
            </MarginIcons>
            <MarginIcons>
              <IoLogoWhatsapp />
            </MarginIcons>
          </Icons>
        </LowerLeftContent>
        <LowerRightContent>
          <div>
            <LRCHeader>ABOUT</LRCHeader>
            <PTag>Our Team</PTag>
            <PTag>Guidelines</PTag>
            <PTag>Terms and Conditions</PTag>
            <PTag>Privacy Policy</PTag>
          </div>
          <LRCServices>
            <LRCHeader>SERVICES</LRCHeader>
            <PTag>WEB Dev.</PTag>
            <PTag>SEO</PTag>
            <PTag>Graphic Design</PTag>
            <PTag>Payment Method</PTag>
          </LRCServices>
          <div>
            <LRCHeader>OTHER</LRCHeader>
            <PTag>Contact Us</PTag>
            <PTag>Help</PTag>
            <PTag>Privacy</PTag>
          </div>
        </LowerRightContent>
      </LowerContent>
    </ContactContainer>
  );
};

export default ConnectWithUs;
