class GlobalStatus {
  constructor(statuses, endpointStatuses) {
    this.statuses = statuses;
    this.endpointStatuses = endpointStatuses;
  }

  get status() {
    if (this.allAreUp()) {
      return this.statuses.up;
    } if (this.anyMaintenance()) {
      return this.statuses.maintenance;
    } if (this.anyFatalOutages()) {
      return this.statuses.fatal;
    } if (this.anyCriticalOutages()) {
      return this.statuses.outage;
    } if (this.anyIssues() || this.anyNonCriticalOutages()) {
      return this.statuses.issue;
    }
    return this.statuses.pending;
  }

  allAreUp() {
    return Object.keys(this.endpointStatuses)
      .every(e => this.endpointStatuses[e].status === 'up');
  }

  anyIssues() {
    return Object.keys(this.endpointStatuses)
      .some(e => this.endpointStatuses[e].status === 'issue');
  }

  anyMaintenance() {
    return Object.keys(this.endpointStatuses)
      .some(e => this.endpointStatuses[e].status === 'maintenance');
  }

  criticalEndpoints() {
    return Object.keys(this.endpointStatuses)
      .filter(e => this.endpointStatuses[e].critical);
  }

  nonCriticalEndpoints() {
    return Object.keys(this.endpointStatuses)
      .filter(e => !this.endpointStatuses[e].critical);
  }

  anyFatalOutages() {
    const appStatus = this.endpointStatuses.searchworksApplication.status;
    const solrStatus = this.endpointStatuses.swSolr.status;
    const articleStatus = this.endpointStatuses.ebsco.status;

    if (appStatus === 'outage' || (solrStatus === 'outage' && articleStatus === 'outage')) {
      return true;
    }
    return false;
  }

  anyNonCriticalOutages() {
    return this.nonCriticalEndpoints().some(e => this.endpointStatuses[e].status === 'outage');
  }

  anyCriticalOutages() {
    return this.criticalEndpoints().some(e => this.endpointStatuses[e].status === 'outage');
  }
}

export default GlobalStatus;