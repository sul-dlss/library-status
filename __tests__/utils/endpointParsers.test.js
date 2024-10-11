import * as parsers from '../../src/utils/endpointParsers';

const response = data => (
  {
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(data),
  }
);

describe('enpointParsers', () => {
  describe('processSwSolr', () => {
    it('returns an outage if the default key is not present', () => {
      return expect(
        parsers.processSwSolr(response({})),
      ).resolves.toEqual('outage');
    });

    it('returns an outage if the checks we expect are not present', () => {
      return expect(
        parsers.processSwSolr(response({ default: { success: true } })),
      ).resolves.toEqual('outage');
    });

    it('returns a performance issue if solr is up but alerting w/ a low app index', () => {
      const data = {
        default: { success: true },
        sw_solr: { success: true },
        low_app_apdex_alert: { success: false },
      };

      return expect(
        parsers.processSwSolr(response(data)),
      ).resolves.toEqual('performanceIssue');
    });

    it('returns up if all the checks are successful', () => {
      const data = {
        default: { success: true },
        sw_solr: { success: true },
        low_app_apdex_alert: { success: true },
      };

      return expect(
        parsers.processSwSolr(response(data)),
      ).resolves.toEqual('up');
    });
  });

  describe('processEbsco', () => {
    it('returns an outage if there are no components in the response', () => {
      return expect(
        parsers.processEbsco(response({})),
      ).resolves.toEqual('outage');
    });

    it('returns an outage if the response is malformed', () => {
      return expect(
        parsers.processEbsco(response('<html>')),
      ).resolves.toEqual('outage');
    });

    it('returns an outage when there are not two operational components', () => {
      const components = [
        { name: 'EBSCO Discovery Service', status: 'borked' },
        { name: 'EBSCO Discovery Service API', status: 'operational' }
      ];

      return expect(
        parsers.processEbsco(response({ components })),
      ).resolves.toEqual('outage');
    });

    it('returns as up when there are two operational components', () => {
      const components = [
        { name: 'EBSCO Discovery Service', status: 'operational' },
        { name: 'EBSCO Discovery Service API', status: 'operational' }
      ];

      return expect(
        parsers.processEbsco(response({ components })),
      ).resolves.toEqual('up');
    });
  });

  describe('processGenericOkComputer', () => {
    it('returns an outage if the default key is not present', () => {
      return expect(
        parsers.processGenericOkComputer(response({})),
      ).resolves.toEqual('outage');
    });

    it('returns an outage if the default check is not successful', () => {
      return expect(
        parsers.processGenericOkComputer(response({ default: { success: false } })),
      ).resolves.toEqual('outage');
    });

    it('returns an outage if the default check does not parse', () => {
      return expect(
        parsers.processGenericOkComputer(response({ default: 'NOPE!' })),
      ).resolves.toEqual('outage');
    });

    it('returns up if the default check is successful', () => {
      return expect(
        parsers.processGenericOkComputer(response({ default: { success: true } })),
      ).resolves.toEqual('up');
    });
  });

  describe('processLiveAvailability', () => {
    it('returns outage if there is no default check', () => {
      return expect(
        parsers.processLiveAvailability(response({})),
      ).resolves.toEqual('outage');
    });

    it('returns outage if the live_lookups check is not successful', () => {
      const data = {
        default: { success: true },
        live_lookups: { success: false },
      };

      return expect(
        parsers.processLiveAvailability(response(data)),
      ).resolves.toEqual('outage');
    });

    it('returns outage if the live_lookups check is not parsable', () => {
      const data = {
        default: { success: true },
        live_lookups: 'NOPE!',
      };

      return expect(
        parsers.processLiveAvailability(response(data)),
      ).resolves.toEqual('outage');
    });

    it('returns up if the live_lookups check is successful', () => {
      const data = {
        default: { success: true },
        live_lookups: { success: true },
      };

      return expect(
        parsers.processLiveAvailability(response(data)),
      ).resolves.toEqual('up');
    });
  });

  describe('processCitationService', () => {
    it('returns outage if there is no default check', () => {
      return expect(
        parsers.processCitationService(response({})),
      ).resolves.toEqual('outage');
    });

    it('returns outage if the oclc_citation_service check is not successful', () => {
      const data = {
        default: { success: true },
        oclc_citation_service: { success: false },
      };

      return expect(
        parsers.processCitationService(response(data)),
      ).resolves.toEqual('outage');
    });

    it('returns outage if the oclc_citation_service check is not parsable', () => {
      const data = {
        default: { success: true },
        oclc_citation_service: 'NOPE!',
      };

      return expect(
        parsers.processCitationService(response(data)),
      ).resolves.toEqual('outage');
    });

    it('returns up if the oclc_citation_service check is successful', () => {
      const data = {
        default: { success: true },
        oclc_citation_service: { success: true },
      };

      return expect(
        parsers.processCitationService(response(data)),
      ).resolves.toEqual('up');
    });
  });
});
