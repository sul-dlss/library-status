import React from 'react';
import Graph from './Graph';

const GraphPanel = ({ graphs }) => (
  <div className="section">
    <h1 id="graphs">Graphs</h1>
    {
      Object.keys(graphs).map(graphKey => (<Graph graph={graphs[graphKey]} />))
    }
  </div>
);

export default GraphPanel;
