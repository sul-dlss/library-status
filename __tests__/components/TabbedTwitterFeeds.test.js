import React from 'react';
import { shallow } from 'enzyme';
// Component to be tested
import TabbedTwitterFeeds from '../../src/components/TabbedTwitterFeeds';

describe('<TabbedTwitterFeeds />', () => {
  const feeds = [
    { feedId: 'sulsystemstatus', label: 'Library systems' },
    { feedId: 'suleresources', label: 'Databases & e-resources' }
  ];

  describe('Active Feed', () => {
    describe('default', () => {
      it('the first tab is active', () => {
        const wrapper = shallow(<TabbedTwitterFeeds feeds={feeds} />);

        expect(wrapper.find('button.active').text()).toEqual('Library systems')
      });
    });

    describe('when a feed is requested in the hash paramter', () => {
      beforeEach(() => history.replaceState({}, 'SULeResources Tab', '/#suleresources'));
      afterEach(() => history.replaceState({}, 'Home', '/'));

      it('the requested tab is active', () => {
        const wrapper = shallow(<TabbedTwitterFeeds feeds={feeds} />);

        expect(wrapper.find('button.active').text()).toEqual('Databases & e-resources')
      });
    });
  });
});
