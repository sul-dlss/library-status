import React from 'react';
import { shallow } from 'enzyme';
import { statusEndpoints } from '../../src/config';
import ServiceGrid from '../../src/components/ServiceGrid';

function shallowWrapper(props) {
  return shallow(
    <ServiceGrid
      endpoints={{}}
      {...props}
    />
  );
}

describe('ServiceGrid', () => {
  const endpoints = {
    ...statusEndpoints,
    swSolr: { ...statusEndpoints.swSolr, status: 'up' },
    embed: { ...statusEndpoints.embed, status: 'outage' },
  };

  it('renders a Status Item for each check in the config', () => {
    const wrapper = shallowWrapper({ endpoints });

    expect(wrapper.find('div#services StatusItem').length).toEqual(8);
  });

  it('passes the approrpiate props to the StatusItem', () => {
    const wrapper = shallowWrapper({ endpoints });

    expect(wrapper.find('div#services StatusItem').at(0).props().serviceStatus).toEqual('up'); // Stubbed success above
    expect(wrapper.find('div#services StatusItem').at(4).props().serviceStatus).toEqual('outage');
  });
});
