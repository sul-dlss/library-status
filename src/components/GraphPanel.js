import React from 'react';
import Graph from './Graph';

const GraphPanel = props => (
  <div className="section">
    <h1 id="graphs">Graphs</h1>
    {
      Object.keys(props.graphs).map((graphKey) => {
        return(<Graph graph={props.graphs[graphKey]} />)
      })
    }
  </div>
)

export default GraphPanel;
