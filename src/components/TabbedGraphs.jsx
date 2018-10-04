import React from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph';

class TabbedGraphs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };

    // This binding is necessary to make 'this' work in the callback
    this.updateActiveIndex = this.updateActiveIndex.bind(this);
  }

  updateActiveIndex(index) {
    this.setState({ activeIndex: index });
  }

  indexIsActive(index) {
    const { activeIndex } = this.state;

    return activeIndex === index;
  }

  activeButtonClass(index) {
    if (this.indexIsActive(index)) {
      return 'active';
    }
    return '';
  }

  ariaSelected(index) {
    if (this.indexIsActive(index)) {
      return 'true';
    }
    return 'false';
  }

  render() {
    const { graph } = this.props;
    return (
      <div>
        <h3>{ graph.title }</h3>
        <div className="graphTabs">
          {
            graph.horizons.map((horizon, i) => (
              <button
                type="button"
                role="tab"
                className={this.activeButtonClass(i)}
                aria-selected={this.ariaSelected(i)}
                key={JSON.stringify(horizon)}
                onClick={() => this.updateActiveIndex(i)}
              >
                { horizon.label }
              </button>
            ))
          }
        </div>
        <div aria-live="polite">
          {
            graph.horizons.filter((horizon, i) => (this.indexIsActive(i))).map(horizon => (
              <Graph graph={horizon} key={JSON.stringify(horizon)} />
            ))
          }
        </div>
      </div>
    );
  }
}

TabbedGraphs.propTypes = {
  graph: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default TabbedGraphs;
