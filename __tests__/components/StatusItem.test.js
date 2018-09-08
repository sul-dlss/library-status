// Test Utilities
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import StatusItem from '../../src/components/StatusItem';

describe('<StatusItem />', () => {
  describe('render()', () => {
    test('renders the StatusItem component', () => {
      const wrapper = shallow(<StatusItem />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
