// Test Utilities
import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Dashboard from '../../src/components/Dashboard';

describe('<Dashboard />', () => {
  it('renders the Dashboard component', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.contains(
      <div >
        <div className="services">
        </div>
        <div id="updates" className="section anchored">
        </div>
      </div>
    ));
  });
});
