import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../src/components/Dashboard';


describe('Dashboard', () => {
  it('renders the StatusPanel', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('UpdatesPanel').length).toEqual(1);
  });

  it('renders the UpdatesPanel', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('UpdatesPanel').length).toEqual(1);
  });

  it('renders the GraphPanel', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('GraphPanel').length).toEqual(1);
  });
});
