import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'src/pages/home';
import AboutUs from 'src/pages/AboutUs';
import Approach from 'src/pages/Approach';
import Expertise from 'src/pages/Expertise';
import Contact from 'src/pages/Contact';

const MainRoutes = (): React.ReactElement => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
