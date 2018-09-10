import React from 'react'

const Graph = props => (
  <div>
    <h2>{ props.graph.title }</h2>
    <iframe src={props.graph.iframeSrc} width="100%" height="300" scrolling="no" frameBorder="no"></iframe>
  </div>
)

export default Graph
