import React from 'react';

const Header = () => (
  <div id="header-container">
    <div id="header" className="container">
      <a className="brand-logo" href="https://library.stanford.edu">Stanford University Libraries</a>
      <h1 className="title">System status</h1>
      <nav className="nav-menu">
        <a href="#GlobalStatusSummary">Current</a>
        <a href="#graphs">Performance</a>
      </nav>
    </div>
  </div>
);

export default Header;
