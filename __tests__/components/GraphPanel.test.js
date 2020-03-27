import React from 'react';
import { shallow } from 'enzyme';
import GraphPanel from '../../src/components/GraphPanel';

describe('GraphPanel', () => {
  it('renders TabbedGraphs for each configured graph', () => {
    const wrapper = shallow(<GraphPanel />);

    expect(wrapper.find('TabbedGraphs').length).toEqual(3);
  });
});
