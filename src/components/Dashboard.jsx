import React from 'react';
import StatusPanel from './StatusPanel';
import GraphPanel from './GraphPanel';

const Dashboard = () => (
  <div className="container">
    <StatusPanel />
    <GraphPanel />
  </div>
);

export default Dashboard;
