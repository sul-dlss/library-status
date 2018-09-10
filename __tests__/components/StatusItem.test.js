// Test Utilities
import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import StatusItem from '../../src/components/StatusItem';

describe('<StatusItem />', () => {
  it('renders the StatusItem component', () => {
    const wrapper = shallow(<StatusItem />);

    expect(wrapper.contains(
      <div className="status-item">
        <div className="status-text">
          <p className="service-name"></p>
          <p className="status-message"></p>
        </div>
        <div className="status-icon"></div>
      </div>
    ))
  });
  it('adds the service status class', () => {
    const wrapper = shallow(<StatusItem serviceStatus={ 'test-class' }/>)

    expect(wrapper.contains(<div className="status-item test-class"></div>))
  });
  it('displays the service name', () => {
    const wrapper = shallow(<StatusItem serviceName={ 'Great Service!' }/>)

    expect(wrapper.find('.service-name').text()).toEqual('Great Service!')
  });
  it('displays the status message', () => {
    const wrapper = shallow(<StatusItem statusMessage={ 'up' }/>)

    expect(wrapper.find('.status-message').text()).toEqual('up')
  });
  it('displays the status icon', () => {
    const wrapper = shallow(<StatusItem statusIcon={ '✅' }/>)

    expect(wrapper.find('.status-icon').text()).toEqual('✅')
  });
});
