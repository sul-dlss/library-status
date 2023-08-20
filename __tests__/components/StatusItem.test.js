// Test Utilities
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

// Component to be tested
import StatusItem from '../../src/components/StatusItem';

function shallowWrapper(props) {
  return render(
    <StatusItem
      serviceStatus="up"
      serviceName="SearchWorks catalog (Solr)"
      statusMessage="No issues"
      statusIcon="✅"
      {...props}
    />
  );
}

describe('<StatusItem />', () => {
  it('adds the service status class', () => {
    const { container } = shallowWrapper({ serviceStatus: 'test-class' });

    expect(container.querySelector('.status-item')).toHaveClass('test-class');
  });
  it('displays the service name', () => {
    shallowWrapper({ serviceName: 'Great Service!' });

    expect(screen.getByText('Great Service!')).toBeInTheDocument();
  });
  it('adds a link to the service name if URL is provided', () => {
    shallowWrapper({ serviceName: 'Great Service!', serviceUrl: 'https://searchworks.stanford.edu' });

    expect(screen.getByRole('link', { name: 'Great Service!' })).toHaveAttribute('href', 'https://searchworks.stanford.edu');
  });
  it('displays the status message', () => {
    shallowWrapper({ statusMessage: 'up' });

    expect(screen.getByText('up')).toBeInTheDocument();
  });
  it('displays the status icon', () => {
    shallowWrapper({ statusIcon: '✅' });

    expect(screen.getByText('✅')).toHaveClass('status-icon');
  });
});
