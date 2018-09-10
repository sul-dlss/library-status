import React from 'react';
import PropTypes from 'prop-types';

const StatusItem = ({
  serviceStatus, serviceName, statusMessage, statusIcon,
}) => (
  <div className={`status-item ${serviceStatus}`}>
    <div className="status-text">
      <p className="service-name">{serviceName}</p>
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
