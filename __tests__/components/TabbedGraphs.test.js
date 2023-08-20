import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { graphs } from '../../src/config';
// Component to be tested
import TabbedGraphs from '../../src/components/TabbedGraphs';

describe('<TabbedGraphs />', () => {
  describe('Tabs', () => {
    it('are rendered for each horizon', () => {
      render(<TabbedGraphs graph={graphs.swResponseTime} />);

      expect(screen.getAllByRole('tab')).toHaveLength(3);
      expect(screen.getAllByRole('tab')[0]).toHaveTextContent('6 hours');
      expect(screen.getAllByRole('tab')[2]).toHaveTextContent('30 days');
    });

    it('active class is dependent on the component state', async () => {
      const user = userEvent.setup();

      render(<TabbedGraphs graph={graphs.swResponseTime} />);

      // First button is active
      expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('6 hours');
      expect(screen.getByRole('tab', { selected: true })).toHaveClass('active');

      await user.click(screen.getByRole('tab', { name: '30 days' }));
      expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('30 days');
      expect(screen.getByRole('tab', { selected: true })).toHaveClass('active');
    });
  });

  describe('Graphs', () => {
    it('renders the first graph in the horizon', () => {
      render(<TabbedGraphs graph={graphs.swResponseTime} />);

      expect(screen.getAllByRole('figure')).toHaveLength(1);
    });

    it('renders the specific graph given the compontent activeIndex state', async () => {
      const user = userEvent.setup();

      const { container } = render(<TabbedGraphs graph={graphs.swResponseTime} />);

      expect(container.querySelector('iframe').src).toEqual(
        'https://rpm.newrelic.com/public/charts/47JE5FsWnMD'
      );

      await user.click(screen.getByRole('tab', { name: '30 days' }));

      expect(container.querySelector('iframe').src).toEqual(
        'https://rpm.newrelic.com/public/charts/8RpiSIXjRBF'
      );
    });
  });
});
