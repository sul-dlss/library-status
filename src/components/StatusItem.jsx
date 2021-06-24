import React from 'react';
import PropTypes from 'prop-types';

class StatusItem extends React.Component {
  hasUrl() {
    const { serviceUrl, serviceName } = this.props;
    if (serviceUrl != null) {
      return <a href={serviceUrl}><h3 className="service-name">{serviceName}</h3></a>;
    }

    return <h3 className="service-name">{serviceName}</h3>;
  }

  // serviceStatus, serviceName, statusMessage, statusIcon, serviceUrl,
  render() {
    const {
      serviceStatus, statusMessage, statusIcon,
    } = this.props;
    return (
      <div className={`status-item ${serviceStatus}`}>
        <div className="status-icon">{statusIcon}</div>
        <div className="status-text">
          {this.hasUrl()}
          <p className="status-message">{statusMessage}</p>
        </div>
      </div>
    );
  }
}

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
