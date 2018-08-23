import React from 'react'

const StatusItem = props => (
    <div className="status-item">
      <div className="status-text">
        <p className="service-name">{props.serviceName}</p>
        <p className="status-message">{props.statusMessage}</p>
      </div>
      <div className="status-icon">{props.statusIcon}</div>
    </div>
)

export default StatusItem
