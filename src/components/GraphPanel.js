import React from 'react'

const GraphPanel = props => (
    <div className="section">
      <h1 id="graphs">Graphs</h1>
      <h2>Searchworks Page Load Time</h2>
      <iframe src="https://rpm.newrelic.com/public/charts/9kReJWHRXyt" width="100%" height="300" scrolling="no" frameBorder="no"></iframe>
      <h2>SOLR Response Time</h2>
      <iframe src="https://rpm.newrelic.com/public/charts/tAPstSMLa7" width="100%" height="300" scrolling="no" frameBorder="no"></iframe>
      <h2>Ebsco Response Time</h2>
      <iframe src="https://rpm.newrelic.com/public/charts/gaCwQOqamfZ" width="100%" height="300" scrolling="no" frameBorder="no"></iframe>
    </div>
)

export default GraphPanel
