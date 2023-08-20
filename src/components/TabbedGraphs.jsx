import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph';

const TabbedGraphs = ({ graph }) => {
  const [activeIndex, updateActiveIndex] = useState(0);

  return (
    <div>
      <h3>{graph.title}</h3>
      <div className="graphTabs" role="tablist">
        {
          graph.horizons.map((horizon, i) => (
            <button
              type="button"
              role="tab"
              className={activeIndex === i ? 'active' : ''}
              aria-selected={activeIndex === i ? 'true' : 'false'}
              key={JSON.stringify(horizon)}
              onClick={() => updateActiveIndex(i)}
            >
              {horizon.label}
            </button>
          ))
        }
      </div>
      <div aria-live="polite">
        {
          graph.horizons.filter((horizon, i) => (activeIndex === i)).map(horizon => (
            <Graph graph={horizon} key={JSON.stringify(horizon)} />
          ))
        }
      </div>
    </div>
  );
};

TabbedGraphs.propTypes = {
  graph: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default TabbedGraphs;
