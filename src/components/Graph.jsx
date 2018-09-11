import React from 'react';
import PropTypes from 'prop-types';

const Graph = ({ graph }) => (
  <div>
    <h2>{ graph.title }</h2>
    <iframe src={graph.iframeSrc} title={graph.title} width="100%" height="300" scrolling="no" frameBorder="no" />
  </div>
);

Graph.propTypes = {
  graph: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Graph;
