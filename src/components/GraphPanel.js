import React from 'react'

const GraphPanel = props => (
    <div className="section">
    <h1 id="graphs">Graphs</h1>
    <h2>Searchworks Page Load Time</h2>
    <iframe src="https://rpm.newrelic.com/public/charts/5f3weQre01n" width="100%" height="300" scrolling="no" frameBorder="no"></iframe>
    <h2>SOLR Response Time</h2>
    <iframe src="https://rpm.newrelic.com/public/charts/iM3aQqmT3Yt" width="100%" height="300" scrolling="no" frameBorder="no"></iframe>
    <h2>Ebsco Response Time</h2>
  <iframe src="https://rpm.newrelic.com/public/charts/lFCu4RDWoE2" width="100%" height="300" scrolling="no" frameBorder="no"></iframe>
    </div>
)

export default GraphPanel
