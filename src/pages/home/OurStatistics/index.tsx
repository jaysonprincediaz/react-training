/* eslint-disable object-curly-newline */
import React from 'react';

import {
  Container,
  UpperContent,
  HeaderOne,
  PTag,
  LowerContent,
  TextContent,
  LowerHeader,
  LowerPtag,
} from './index.styles';

const OurStatistic = (): React.ReactElement => {
  return (
    <Container>
      <UpperContent>
        <HeaderOne>OUR STATISTICS</HeaderOne>
        <PTag>
          Lorem ipsum dolor somet, concectetor adepicsing elit. Vivamus lacinia odio vitae vestibulum vestibulum
        </PTag>
      </UpperContent>
      <LowerContent>
        <TextContent>
          <LowerHeader>100+</LowerHeader>
          <LowerPtag>Active Clients</LowerPtag>
        </TextContent>
        <TextContent>
          <LowerHeader>250+</LowerHeader>
          <LowerPtag>Project Done</LowerPtag>
        </TextContent>
        <TextContent>
          <LowerHeader>95%+</LowerHeader>
          <LowerPtag>Success Rate</LowerPtag>
        </TextContent>
      </LowerContent>
    </Container>
  );
};

export default OurStatistic;
