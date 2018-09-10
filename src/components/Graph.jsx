import React from 'react';

const Graph = ({ graph }) => (
  <div>
    <h2>{ graph.title }</h2>
    <iframe src={graph.iframeSrc} width="100%" height="300" scrolling="no" frameBorder="no" />
  </div>
);

export default Graph;
