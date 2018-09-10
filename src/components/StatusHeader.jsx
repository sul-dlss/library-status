import React from 'react';

const StatusHeader = props => (
  <div id="status-header">
    <h3>Current Service Status</h3>
    <div className="status-legend">
      {Object.keys(props.statuses)
        .map((status, i) => {
          const currentStatus = props.statuses[status];
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

export default StatusHeader;
