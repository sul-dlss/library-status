import React from 'react';
import PropTypes from 'prop-types';

const Graph = ({ graph }) => (
  <div role="figure">
    <h3>{ graph.title }</h3>
    {/* eslint-disable jsx-a11y/iframe-has-title */}
    <iframe src={graph.iframeSrc} width="100%" height="300" scrolling="no" frameBorder="no" />
    {/* eslint-enable jsx-a11y/iframe-has-title */}
  </div>
);

Graph.propTypes = {
  graph: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Graph;
