import React from 'react';
import TabbedTwitterFeeds from './TabbedTwitterFeeds';

const UpdatesPanel = () => (
  <div id="updates" className="section anchored">
    <h2>Incidents</h2>
    <p>Updates about planned and unplanned service interruptions.</p>
    <TabbedTwitterFeeds />
  </div>
);

export default UpdatesPanel;
