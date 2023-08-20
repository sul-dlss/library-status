import React from 'react';

const StatusHeader = () => (
  <div id="status-header" className="section">
    <h2>Current service status</h2>
    {/* eslint-disable max-len */}
    <p>This section shows a snapshot of Stanford Libraries systems and services, as reported by our monitoring systems. (Some systems are not yet represented here.)</p>
    <p>Any issues shown below have been reported to the appropriate operations and development teams.</p>
    {/* eslint-enable max-len */}
  </div>
);

export default StatusHeader;
