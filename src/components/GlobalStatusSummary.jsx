import React from 'react';
import PropTypes from 'prop-types';

const GlobalStatusSummary = ({ status }) => (

  <div id="GlobalStatusSummary" className="section">
    <h1>{status.icon}</h1>
    <h3>{status.legend}</h3>
    <p>
      {status.global_message || status.message}
    </p>
  </div>
);

GlobalStatusSummary.propTypes = {
  status: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default GlobalStatusSummary;
