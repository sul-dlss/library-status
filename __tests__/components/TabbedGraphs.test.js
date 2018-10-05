import React from 'react';
import { shallow } from 'enzyme';
import { graphs } from '../../src/config';
// Component to be tested
import TabbedGraphs from '../../src/components/TabbedGraphs';

describe('<TabbedGraphs />', () => {
  describe('Tabs', () => {
    it('are rendered for each horizon', () => {
      const wrapper = shallow(<TabbedGraphs graph={graphs.swResponseTime} />);

      const buttons = wrapper.find('.graphTabs button');

      expect(buttons.length).toEqual(3)
      expect(buttons.first().text()).toEqual('6 hours')
      expect(buttons.last().text()).toEqual('30 days')
    });

    it('active class is dependent on the component state', () => {
      const wrapper = shallow(<TabbedGraphs graph={graphs.swResponseTime} />);

      // First button is active
      var buttons = wrapper.find('.graphTabs button');
      expect(wrapper.find('.graphTabs button.active').length).toEqual(1)
      expect(buttons.first().hasClass('active')).toEqual(true)

      wrapper.setState({activeIndex: 2})

      // Last button is active
      buttons = wrapper.find('.graphTabs button');
      expect(wrapper.find('.graphTabs button.active').length).toEqual(1)
      expect(buttons.last().hasClass('active')).toEqual(true)
    });

    it('updates the component state when clicking on a tab button', () => {
      const wrapper = shallow(<TabbedGraphs graph={graphs.swResponseTime} />);

      expect(wrapper.state().activeIndex).toEqual(0)

      wrapper.find('.graphTabs button').last().simulate('click')

      expect(wrapper.state().activeIndex).toEqual(2)
    });

  });

  describe('Graphs', () => {
    it('renders the first graph in the horizon', () => {
      const wrapper = shallow(<TabbedGraphs graph={graphs.swResponseTime} />);

      expect(wrapper.find('Graph').length).toEqual(1);
    });

    it('renders the specific graph given the compontent activeIndex state', () => {
      const wrapper = shallow(<TabbedGraphs graph={graphs.swResponseTime} />);

      expect(wrapper.find('Graph').prop('graph').iframeSrc).toEqual(
        'https://rpm.newrelic.com/public/charts/9ALOIQ1o17Q'
      );

      wrapper.setState({ activeIndex: 2 });

      expect(wrapper.find('Graph').prop('graph').iframeSrc).toEqual(
        'https://rpm.newrelic.com/public/charts/9dxzdf4V71h'
      );
    });
  });
});
