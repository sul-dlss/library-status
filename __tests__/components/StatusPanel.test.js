import React from 'react';
import { shallow } from 'enzyme';
import { statuses } from '../../src/config';
import StatusPanel from '../../src/components/StatusPanel';

describe('StatusPanel', () => {
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
    const wrapper = shallow(<StatusPanel />);
    const summary = wrapper.find('GlobalStatusSummary');

    expect(summary.length).toEqual(1);
    expect(summary.props().status).toEqual(statuses.pending);
  });

  it('renders the Dashboard with the endpoints stored in state', () => {
    const wrapper = shallow(<StatusPanel />);
    expect(wrapper.state().endpoints).toEqual(wrapper.state().endpoints);
  });

  describe('processing responses', () => {
    json = { default: true, sw_solr: { success: true }, low_app_apdex_alert: { success: true } };

    it('processes the statuses based on the returned response', () => {
      let wrapper = shallow(<StatusPanel />);

      expect(wrapper.state().endpoints.swSolr.status).toEqual('up');
      expect(wrapper.state().endpoints.embed.status).toEqual('outage');
    });
  });

  it('renders the StatusHeader', () => {
    const wrapper = shallow(<StatusPanel />);

    expect(wrapper.find('StatusHeader').length).toEqual(1);
  });

  describe('.groupedEndpoints', () => {
    it('groups all configured statusEndpoints by their endpoint URL', () => {
      const groupedEndpoints = new StatusPanel({}).groupedEndpoints();
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
