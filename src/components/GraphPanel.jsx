import React from 'react';
import { graphs } from '../config';
import TabbedGraphs from './TabbedGraphs';

const GraphPanel = () => (
  <div id="graphs" className="section">
    <h2>SearchWorks performance metrics</h2>
    <p>These graphs show response times of the SearchWorks application and its indexes.</p>
    <p>The team is alerted when response time reaches a threshold and remains there for 5 minutes. These incidents show as light-pink bars in the graphs. A brief spike in a graph may represent a momentary outage without triggering an alert.</p>
    {
      Object.keys(graphs).map(graphKey => (
        <TabbedGraphs graph={graphs[graphKey]} key={graphKey} />
      ))
    }
  </div>
);

export default GraphPanel;
