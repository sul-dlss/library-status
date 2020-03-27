import React from 'react';
import PropTypes from 'prop-types';
import StatusItem from './StatusItem';
import { statuses } from '../config';

const ServiceGrid = ({ endpoints }) => (
  <div id="services">
    {Object.keys(endpoints || {}).map((endpointName) => {
      // Return the element. Also pass key
      const endpoint = endpoints[endpointName];
      return (
        <StatusItem
          key={endpointName}
          serviceName={endpoint.displayName}
          serviceUrl={endpoint.serviceUrl}
          serviceStatus={endpoint.status}
          statusMessage={statuses[endpoint.status].message}
          statusIcon={statuses[endpoint.status].icon}
        />
      );
    })}
  </div>
);

ServiceGrid.propTypes = {
  endpoints: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ServiceGrid;
