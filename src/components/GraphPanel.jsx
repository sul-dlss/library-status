import React from 'react';
import PropTypes from 'prop-types';
import TabbedGraphs from './TabbedGraphs';

const GraphPanel = ({ graphs }) => (
  <div id="graphs" className="section anchored">
    <h2>SearchWorks performance metrics</h2>
    <p>These graphs show response times of the SearchWorks application and its indexes.</p>
    {/* eslint-disable max-len */}
    <p>The team is alerted when response time reaches a threshold and remains there for 5 minutes. These incidents show as light-pink bars in the graphs. A brief spike in a graph may represent a momentary outage without triggering an alert.</p>
    {/* eslint-enable max-len */}
    {
      Object.keys(graphs).map(graphKey => (
        <TabbedGraphs graph={graphs[graphKey]} key={graphKey} />
      ))
    }
  </div>
);

GraphPanel.propTypes = {
  graphs: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default GraphPanel;
