/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

import { SiEgghead } from 'react-icons/si';
import { HiOutlineSearch } from 'react-icons/hi';

const NavBar = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        <SiEgghead />
        EGG
      </div>

      <ul className="navbar-lists">
        <li onClick={() => navigate('/')}>HOME</li>
        <li onClick={() => navigate('/about')}>ABOUT US</li>
        <li onClick={() => navigate('/expertise')}>EXPERTISE</li>
        <li onClick={() => navigate('/approach')}>OUR APPROACH</li>
        <li onClick={() => navigate('/contact')}>CONTACT</li>
      </ul>
      <div className="navbar-icon">
        {' '}
        <HiOutlineSearch />
      </div>
    </nav>
  );
};

export default NavBar;
