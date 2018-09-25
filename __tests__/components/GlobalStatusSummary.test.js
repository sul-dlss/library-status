// Test Utilities
import React from 'react';
import { shallow } from 'enzyme';
import { statuses } from '../../src/config';
// Component to be tested
import GlobalStatusSummary from '../../src/components/GlobalStatusSummary';


describe('<GlobalStatusSummary />', () => {

  it('renders the given status', () => {
    const wrapper = shallow(<GlobalStatusSummary status={statuses.outage} />);

    expect(wrapper.find('.status-icon').text()).toEqual('🚫')
    expect(wrapper.find('.status-legend').text()).toEqual('Outage')
    expect(wrapper.find('p').text()).toEqual('Not responding. SearchWorks team has been notified.')
  });

  it('renders a global status message if present', () => {
    const wrapper = shallow(<GlobalStatusSummary status={statuses.issue} />);

    expect(wrapper.find('p').text()).toMatch(/There is an issue with SearchWorks or a related service/)
  });
});
