import React from 'react';
import PropTypes from 'prop-types';

const GlobalStatusSummary = ({ status }) => (

  <div id="GlobalStatusSummary" className="section anchored">
    <div className="status-icon">{status.icon}</div>
    <div className="status-legend">{status.legend}</div>
    <p>
      {status.global_message || status.message}
    </p>
  </div>
);

GlobalStatusSummary.propTypes = {
  status: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default GlobalStatusSummary;
