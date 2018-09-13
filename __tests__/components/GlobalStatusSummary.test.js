// Test Utilities
import React from 'react';
import { shallow } from 'enzyme';
import { statuses } from '../../src/config';
// Component to be tested
import GlobalStatusSummary from '../../src/components/GlobalStatusSummary';


describe('<GlobalStatusSummary />', () => {

  it('renders the given status', () => {
    const wrapper = shallow(<GlobalStatusSummary status={statuses.outage} />);

    expect(wrapper.find('h1').text()).toEqual('🚫')
    expect(wrapper.find('h3').text()).toEqual('Outage')
    expect(wrapper.find('p').text()).toEqual('This service is currently unavailable due to an outage.')
  });

  it('renders a global status message if present', () => {
    const wrapper = shallow(<GlobalStatusSummary status={statuses.issue} />);

    expect(wrapper.find('p').text()).toMatch(/There is currently an issue with SearchWorks or a related service/)
  });
});
