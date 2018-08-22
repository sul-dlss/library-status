import React from 'react'

class StatusItem extends React.Component {
  state = {
    serviceName: 'SearchWorks',
    status: '😁'
  }

  render() {
    return <div className="status-item">
      <div>{this.state.serviceName}</div>
      <div>{this.state.status}</div>
    </div>
  }
}

export default StatusItem
