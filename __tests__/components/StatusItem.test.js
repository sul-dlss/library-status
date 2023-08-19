// Test Utilities
import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import StatusItem from '../../src/components/StatusItem';

function shallowWrapper(props) {
  return shallow(
    <StatusItem
      serviceStatus="up"
      serviceName="SearchWorks catalog (Solr)"
      statusMessage="No issues"
      statusIcon="✅"
      {...props}
    />
  );
}

describe('<StatusItem />', () => {
  it('renders the StatusItem component', () => {
    const wrapper = shallowWrapper();

    expect(wrapper.contains(
      <div className="status-item">
        <div className="status-icon"></div>
        <div className="status-text">
          <h3 className="service-name"></h3>
          <p className="status-message"></p>
        </div>
      </div>
    ))
  });
  it('adds the service status class', () => {
    const wrapper = shallowWrapper({ serviceStatus: 'test-class' });

    expect(wrapper.contains(<div className="status-item test-class"></div>));
  });
  it('displays the service name', () => {
    const wrapper = shallowWrapper({ serviceName:  'Great Service!' });

    expect(wrapper.find('ServiceName').prop('serviceName')).toEqual('Great Service!');
  });
  it('adds a link to the service name if URL is provided', () => {
    const wrapper = shallowWrapper({ serviceName: 'Great Service!', serviceUrl: 'https://searchworks.stanford.edu' });
    expect(wrapper.find('ServiceName').prop('serviceName')).toEqual('Great Service!')
    expect(wrapper.find('ServiceName').prop('serviceUrl')).toEqual('https://searchworks.stanford.edu')
  });
  it('displays the status message', () => {
    const wrapper = shallowWrapper({ statusMessage: 'up' });

    expect(wrapper.find('.status-message').text()).toEqual('up');
  });
  it('displays the status icon', () => {
    const wrapper = shallowWrapper({ statusIcon: '✅' });

    expect(wrapper.find('.status-icon').text()).toEqual('✅');
  });
});
