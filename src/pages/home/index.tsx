import React from 'react';

import GrowYourBusiness from './GrowYourBusiness';
import WeGotYou from './WeGotYou';
import Pricing from './Pricing';
import WeAreCreative from './WeAreCreative';
import WeArePassionate from './WeArePassionate';
import OurStatistic from './OurStatistics';
import OurDigitalMarketingProcess from './OurDigitalMarketingProcess';
import ConnectWithUs from './ConnectWithUs';

const Home = (): React.ReactElement => {
  return (
    <div>
      <GrowYourBusiness />
      <WeGotYou />
      <Pricing />
      <WeAreCreative />
      <WeArePassionate />
      <OurStatistic />
      <OurDigitalMarketingProcess />
      <ConnectWithUs />
    </div>
  );
};

export default Home;
