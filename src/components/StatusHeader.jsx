import React from 'react';
import PropTypes from 'prop-types';

const StatusHeader = ({ statuses }) => (
  <div id="status-header">
    <h3>Current Service Status</h3>
    <div className="status-legend">
      {Object.keys(statuses)
        .map((status, i) => {
          const currentStatus = statuses[status];
          if (status !== 'pending') {
            return (
              <div key={i} className="status-legend-item">
                <p>
                  <span>{currentStatus.icon}</span>
                  {currentStatus.legend}
                </p>
              </div>
            );
          }
        })}
    </div>
  </div>
);

StatusHeader.propTypes = {
  statuses: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default StatusHeader;
