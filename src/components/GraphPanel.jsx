import React from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph';

const GraphPanel = ({ graphs }) => (
  <div id="graphs" className="section anchored">
    <h1>Graphs</h1>
    {
      Object.keys(graphs).map(graphKey => (<Graph graph={graphs[graphKey]} key={graphKey} />))
    }
  </div>
);

GraphPanel.propTypes = {
  graphs: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default GraphPanel;
