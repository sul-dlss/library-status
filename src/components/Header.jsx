import React from 'react';
import SulLogo from '../styles/sul-logo.svg';

const Header = () => (
  <div id="header">
    <div className="brand-logo">
      <img src={SulLogo} alt="" height="35px" />
    </div>
    <div className="title">
      <h1>Searchworks Status</h1>
    </div>
    <div className="nav-menu">
      <a href="#top">Dashboard</a>
      <a href="#updates">Updates</a>
      <a href="#graphs">Graphs</a>
    </div>
  </div>
);

export default Header;
