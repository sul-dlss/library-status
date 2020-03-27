import React from 'react';
import StatusPanel from './StatusPanel';
import GraphPanel from './GraphPanel';
import UpdatesPanel from './UpdatesPanel';

const Dashboard = () => (
  <>
    <StatusPanel />
    <UpdatesPanel />
    <GraphPanel />
  </>
);

export default Dashboard;
