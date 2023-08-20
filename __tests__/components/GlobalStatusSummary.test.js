// Test Utilities
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { statuses } from '../../src/config';
// Component to be tested
import GlobalStatusSummary from '../../src/components/GlobalStatusSummary';


describe('<GlobalStatusSummary />', () => {

  it('renders the given status', () => {
    render(<GlobalStatusSummary status={statuses.nonCritical} />);

    expect(screen.getByText('⚠️')).toHaveClass('status-icon');
    expect(screen.getByText('SearchWorks may have an issue')).toHaveClass('status-legend');
    expect(screen.getByText('One of its supporting services is affected.')).toBeInTheDocument();
  });

  it('renders a global status message if present', () => {
    render(<GlobalStatusSummary status={statuses.performanceIssue} />);
    expect(screen.getByText('The operations team has been alerted.')).toBeInTheDocument();
  });
});
