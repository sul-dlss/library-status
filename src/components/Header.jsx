import React from 'react';
import SulLogo from '../styles/sul-logo.svg';

const Header = () => (
  <div id="header">
    <div className="brand-logo">
      <img src={SulLogo} alt="" height="35px" />
    </div>
    <div className="title">
      <h1>SearchWorks status</h1>
    </div>
    <div className="nav-menu">
      <a href="#top">Current status</a>
      <a href="#updates">Updates</a>
      <a href="#graphs">Performance</a>
    </div>
  </div>
);

export default Header;
