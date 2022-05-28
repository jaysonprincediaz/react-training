/* eslint-disable object-curly-newline */
import React from 'react';

import { WeAreCreativeContainer, Content, ContentContainer, PTag, HeaderOne, Button } from './index.styles';

const WeAreCreative = (): React.ReactElement => {
  return (
    <WeAreCreativeContainer>
      <ContentContainer>
        <Content>
          <HeaderOne>WE ARE CREATIVE</HeaderOne>
          <PTag>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et
            dolore.
          </PTag>
          <Button>READ MORE</Button>
        </Content>
      </ContentContainer>
    </WeAreCreativeContainer>
  );
};

export default WeAreCreative;
