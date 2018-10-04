import React from 'react';
import PropTypes from 'prop-types';
import TabbedGraphs from './TabbedGraphs';

const GraphPanel = ({ graphs }) => (
  <div id="graphs" className="section anchored">
    <h2>Performance metrics</h2>
    <p>Sharp spikes in the graphs may have been experienced as momentary outages.</p>
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
