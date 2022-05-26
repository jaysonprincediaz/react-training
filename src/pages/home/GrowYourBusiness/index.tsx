import React from 'react';
import Button from 'src/components/button';

import { GrowYourBusinessContainer, HeaderOne, Paragraph } from 'src/pages/home/GrowYourBusiness/index.styles';

const GrowYourBusiness = (): React.ReactElement => {
  return (
    <GrowYourBusinessContainer>
      <HeaderOne>GROW YOUR BUSINESS</HeaderOne>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <Button />
    </GrowYourBusinessContainer>
  );
};

export default GrowYourBusiness;
