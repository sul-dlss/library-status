import React from 'react';

const Footer = () => (
  <div id="footer" className="container">
    <p>
      <span>Need to reach us? Try </span>
      <a href="https://searchworks.stanford.edu/feedback">
        SearchWorks feedback.
      </a>
    </p>
    <p>
      {/* eslint-disable max-len */}
      <span>If you cannot access content or use features on this website due to a disability, please </span>
      {/* eslint-enable max-len */}
      <a href="mailto:library-accessibility-contact@lists.stanford.edu">report your accessibility issue</a>
      .
    </p>
  </div>
);

export default Footer;
