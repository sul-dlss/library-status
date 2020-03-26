import Dashboard from '../../src/components/Dashboard';

describe('Dashboard', () => {
  describe('.groupedEndpoints', () => {
    it('groups all configured statusEndpoints by their endpoint URL', () => {
      const groupedEndpoints = new Dashboard({}).groupedEndpoints();
      expect(Object.keys(groupedEndpoints)).toEqual([
        'https://searchworks.stanford.edu/status/all.json',
        'https://status.ebsco.com/index.json',
        'https://library.stanford.edu/healthcheck.php',
        'https://library-hours.stanford.edu/status/all.json',
        'https://requests.stanford.edu/status/all.json',
        'https://embed.stanford.edu/status/all.json',
        'https://mylibrary.stanford.edu/status/all.json',
      ]);

      expect(Object.keys(groupedEndpoints['https://searchworks.stanford.edu/status/all.json'])).toEqual([
        'swSolr', 'liveAvailability', 'citationService',
      ]);

      expect(groupedEndpoints['https://searchworks.stanford.edu/status/all.json']['swSolr']['displayName']).toEqual(
        'SearchWorks catalog (Solr)',
      );
    });
  });
});
