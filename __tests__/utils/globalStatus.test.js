// Test Utilities
import { statusEndpoints, statuses } from '../../src/config';
import GlobalStatus from '../../src/utils/globalStatus';

const originalStatusEndpoints = statusEndpoints;

describe('<GlobalStatus />', () => {
  afterEach(() => {
    Object.keys(statusEndpoints).forEach((key) => {
      statusEndpoints[key].status = 'pending'
    });
  });

  it('renders a pending status', () => {
    const status = new GlobalStatus(statuses, statusEndpoints).status;

    expect(status.icon).toEqual('🔄');
  });

  describe('Up', () => {
    beforeEach(() => {
      Object.keys(statusEndpoints).forEach((key) => {
        statusEndpoints[key].status = 'up';
      });
    });

    it('renders the GlobalStatusSummary component as up', () => {
      const status = new GlobalStatus(statuses, statusEndpoints).status;

      expect(status.icon).toEqual('✅');
    });
  });

  describe('Maintenance', () => {
    beforeEach(() => {
      Object.keys(statusEndpoints).forEach((key) => {
        statusEndpoints[key].status = 'maintenance';
      });
    });

    it('renders the GlobalStatusSummary component as in maintenance mode if any of the statuses are "maintenance"', () => {
      const status = new GlobalStatus(statuses, statusEndpoints).status;

      expect(status.icon).toEqual('🛠');
    });
  });

  describe('Fatal', () => {
    describe('when the SearchWorks web app is up but solr and the Aricle API is down', () => {
      beforeEach(() => {
        statusEndpoints.swSolr.status = 'outage';
        statusEndpoints.ebsco.status = 'outage';
      });

      it('renders the component as fatal', () => {
        const status = new GlobalStatus(statuses, statusEndpoints).status;

        expect(status.icon).toEqual('🚫');
        expect(status.global_message).toEqual("We're on it. Check incidents for updates.");
      });
    });
  });

  describe('Critical', () => {
    describe('when a critical service has an outage', () => {
      beforeEach(() => {
        statusEndpoints.swSolr.status = 'up';
        statusEndpoints.ebsco.status = 'outage';
      });

      it('renders the component as an outage', () => {
        const status = new GlobalStatus(statuses, statusEndpoints).status;

        expect(status.icon).toEqual('🚫');
        expect(status.message).toEqual('Service is down; operations team is aware');
      });
    });
  });

  describe('Performance', () => {
    describe('when the new relic APM falls beneath its threshold', () => {
      beforeEach(() => {
        statusEndpoints.swSolr.status = 'performanceIssue';
        statusEndpoints.requests.status = 'outage';
      });

      it('renders the component as a performance issue', () => {
        const status = new GlobalStatus(statuses, statusEndpoints).status;

        expect(status.icon).toEqual('⚠️');
        expect(status.message).toEqual('Performance is slower than normal');
        expect(status.global_message).toEqual('The operations team has been alerted.');
      });
    });
  });

  describe('non-critical outages or issues', () => {
    describe('when a non-critical service has an outage', () => {
      beforeEach(() => {
        statusEndpoints.requests.status = 'outage';
      });

      it('renders the component as an issue', () => {
        const status = new GlobalStatus(statuses, statusEndpoints).status;

        expect(status.icon).toEqual('⚠️');
        expect(status.global_message).toEqual(
          'One of its supporting services is affected.'
        );
      });
    });

    describe('when any service has an issue', () => {
      beforeEach(() => {
        statusEndpoints.swSolr.status = 'issue';
      });

      it('renders the component as an issue', () => {
        const status = new GlobalStatus(statuses, statusEndpoints).status;

        expect(status.icon).toEqual('⚠️');
        expect(status.global_message).toEqual(
          'One of its supporting services is affected.'
        );
      });
    });
  });
});
