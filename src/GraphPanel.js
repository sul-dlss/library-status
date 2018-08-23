
import React from 'react'

class GraphPanel extends React.Component {
  render() {
    return <div id="graph-panel">
      <iframe src="https://rpm.newrelic.com/public/charts/8Y9tUx8BZ5j" width="500" height="300" scrolling="no" frameborder="no"></iframe>
    </div>
  }
}

export default GraphPanel
