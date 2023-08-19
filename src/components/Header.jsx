import React from 'react';
import SulLogo from '../styles/sul-logo.svg';
import SulRosette from '../styles/sul-rosette.svg';

const Header = () => (
  <div id="header-container">
    <div id="header">
      <div className="brand-logo">
        <a href="https://library.stanford.edu">
          <img src={SulLogo} alt="Stanford Libraries" height="35px" className="display-large" />
          <img src={SulRosette} alt="Stanford Libraries" height="35px" className="display-small" />
        </a>
      </div>
      <div className="title">
        <h1>System status</h1>
      </div>
      <div className="nav-menu">
        <a href="#GlobalStatusSummary">Current</a>
        <a href="#graphs">Performance</a>
      </div>
    </div>
  </div>
);

export default Header;
