import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
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
    render(<StatusPanel />);

    expect(screen.getAllByText('Checking status ...')[0]).toBeInTheDocument();
  });

  describe('processing responses', () => {
    json = { default: true, sw_solr: { success: true }, low_app_apdex_alert: { success: true } };

    it('processes the statuses based on the returned response', () => {
      render(<StatusPanel />);

      waitFor(() => {
        expect(screen.getByText('SearchWorks catalog (Solr)').closest('.status-item')).toHaveClass('up');
      });
    });
  });

  it('renders the StatusHeader', () => {
    render(<StatusPanel />);

    expect(screen.getByRole('heading', { name: 'Current service status' })).toBeInTheDocument();
  });
});
