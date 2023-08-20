import React, { useState } from 'react';
import {
  Tabs, TabList, Tab, TabPanel,
} from 'react-aria-components';
import PropTypes from 'prop-types';

const TabbedGraphs = ({ graph }) => {
  const [activeIndex, updateActiveIndex] = useState(graph.horizons[0].id);

  return (
    <Tabs selectedKey={activeIndex} onSelectionChange={updateActiveIndex} keyboardActivation="manual">
      <h3>{graph.title}</h3>
      <TabList className="graphTabs">
        {
          graph.horizons.map((horizon, i) => (
            <Tab
              id={`${horizon.id}`}
              className={`tab ${activeIndex === horizon.id ? 'active' : ''}`}
              key={horizon.id}
            >
              {horizon.label}
            </Tab>
          ))
        }
      </TabList>
      {
        graph.horizons.map((horizon, i) => (
          <TabPanel id={horizon.id} key={horizon.id}>
            <iframe title={`Graph of ${graph.title} over the last ${horizon.label}}`} src={horizon.iframeSrc} width="100%" height="300" scrolling="no" frameBorder="no" />
          </TabPanel>
        ))
      }
    </Tabs>
  );
};

TabbedGraphs.propTypes = {
  graph: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default TabbedGraphs;
