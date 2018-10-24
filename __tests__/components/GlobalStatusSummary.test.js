// Test Utilities
import React from 'react';
import { shallow } from 'enzyme';
import { statuses } from '../../src/config';
// Component to be tested
import GlobalStatusSummary from '../../src/components/GlobalStatusSummary';


describe('<GlobalStatusSummary />', () => {

  it('renders the given status', () => {
    const wrapper = shallow(<GlobalStatusSummary status={statuses.nonCritical} />);

    expect(wrapper.find('.status-icon').text()).toEqual('⚠️')
    expect(wrapper.find('.status-legend').text()).toEqual('Searchworks may have an issue')
    expect(wrapper.find('p').text()).toEqual('One of its supporting services is affected.')
  });

  it('renders a global status message if present', () => {
    const wrapper = shallow(<GlobalStatusSummary status={statuses.performanceIssue} />);

    expect(wrapper.find('p').text()).toMatch(/The operations team has been alerted./)
  });
});
