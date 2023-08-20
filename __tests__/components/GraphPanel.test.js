import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import GraphPanel from '../../src/components/GraphPanel';

describe('GraphPanel', () => {
  it('renders TabbedGraphs for each configured graph', () => {
    render(<GraphPanel />);

    expect(screen.getAllByRole('tablist')).toHaveLength(3);
  });
});
