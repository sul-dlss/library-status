import React from 'react';
import PropTypes from 'prop-types';

const StatusHeader = ({ statuses }) => (
  <div id="status-header">
    <h2>Current Service Status</h2>
    <div className="status-legend">
      {Object.keys(statuses)
        .map((status) => {
          const currentStatus = statuses[status];
          if (status !== 'pending' && status !== 'fatal') {
            return (
              <div key={status} className="status-legend-item">
                <p>
                  <span>{currentStatus.icon}</span>
                  {currentStatus.legend}
                </p>
              </div>
            );
          }
          return '';
        })}
    </div>
  </div>
);

StatusHeader.propTypes = {
  statuses: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default StatusHeader;
