import React from 'react';
import PropTypes from 'prop-types';

const ServiceName = ({ serviceName, serviceUrl }) => {
  if (serviceUrl) {
    return (<a href={serviceUrl}><h3 className="service-name">{serviceName}</h3></a>);
  }

  return (<h3 className="service-name">{serviceName}</h3>);
};

const StatusItem = ({ serviceStatus, serviceName, statusMessage, statusIcon, serviceUrl }) => (
  <div className={`status-item ${serviceStatus}`}>
    <div className="status-icon">{statusIcon}</div>
    <div className="status-text">
      <ServiceName serviceName={serviceName} serviceUrl={serviceUrl} />
      <p className="status-message">{statusMessage}</p>
    </div>
  </div>
);

StatusItem.propTypes = {
  serviceStatus: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  statusMessage: PropTypes.string.isRequired,
  statusIcon: PropTypes.string.isRequired,
  serviceUrl: PropTypes.string,
};

StatusItem.defaultProps = {
  serviceUrl: null,
};

export default StatusItem;
