import React from 'react';
import PropTypes from 'prop-types';

const StatusItem = ({
  serviceStatus, serviceName, statusMessage, statusIcon,
}) => (
  <div className={`status-item ${serviceStatus}`}>
    <div className="status-text">
      <h3 className="service-name">{serviceName}</h3>
      <p className="status-message">{statusMessage}</p>
    </div>
    <div className="status-icon">{statusIcon}</div>
  </div>
);

StatusItem.propTypes = {
  serviceStatus: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  statusMessage: PropTypes.string.isRequired,
  statusIcon: PropTypes.string.isRequired,
};

export default StatusItem;
