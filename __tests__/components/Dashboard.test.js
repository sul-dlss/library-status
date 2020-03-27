import React from 'react';
import { shallow } from 'enzyme';
import { statusEndpoints, statuses } from '../../src/config';
import Dashboard from '../../src/components/Dashboard';


describe('Dashboard', () => {
  let json = {};
  let text = '';
  let status = 200;

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      status,
      clone: () => (
        {
          json: () => Promise.resolve(json),
          text: () => Promise.resolve(text),
        }
      ),
    }));
  });

  it('renders the GlobalStatusSummary w/ an initital (pending/loading) status', () => {
    const wrapper = shallow(<Dashboard />);
    const summary = wrapper.find('GlobalStatusSummary');

    expect(summary.length).toEqual(1);
    expect(summary.props().status).toEqual(statuses.pending);
  });

  it('renders the Dashboard with the endpoints stored in state', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.state().endpoints).toEqual(wrapper.state().endpoints);
  });

  describe('processing responses', () => {
    json = { default: true, sw_solr: { success: true }, low_app_apdex_alert: { success: true } };

    it('processes the statuses based on the returned response', () => {
      let wrapper = shallow(<Dashboard />);

      expect(wrapper.find('div#services StatusItem').at(0).props().serviceStatus).toEqual('up'); // Stubbed success above
      expect(wrapper.find('div#services StatusItem').at(1).props().serviceStatus).toEqual('outage');
    });
  });

  it('renders the StatusHeader', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('StatusHeader').length).toEqual(1);
  });

  it('renders a Status Item for each check in the config', () => {
    const wrapper = shallow(<Dashboard />);
    const expectedItems = Object.keys(statusEndpoints).length;
    expect(wrapper.find('div#services StatusItem').length).toEqual(expectedItems);
  });

  it('renders the UpdatesPanel', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('UpdatesPanel').length).toEqual(1);
  });

  it('renders the GraphPanel', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('GraphPanel').length).toEqual(1);
  });

  describe('.groupedEndpoints', () => {
    it('groups all configured statusEndpoints by their endpoint URL', () => {
      const groupedEndpoints = new Dashboard({}).groupedEndpoints();
      expect(Object.keys(groupedEndpoints)).toEqual([
        'https://searchworks.stanford.edu/status/all.json',
        'https://status.ebsco.com/index.json',
        'https://library.stanford.edu/healthcheck.php',
        'https://library-hours.stanford.edu/status/all.json',
        'https://requests.stanford.edu/status/all.json',
        'https://embed.stanford.edu/status/all.json',
        'https://mylibrary.stanford.edu/status/all.json',
      ]);

      expect(Object.keys(groupedEndpoints['https://searchworks.stanford.edu/status/all.json'])).toEqual([
        'swSolr', 'liveAvailability', 'citationService',
      ]);

      expect(groupedEndpoints['https://searchworks.stanford.edu/status/all.json']['swSolr']['displayName']).toEqual(
        'SearchWorks catalog (Solr)',
      );
    });
  });
});
