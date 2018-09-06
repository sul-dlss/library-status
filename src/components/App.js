import React from 'react'
import { hot } from 'react-hot-loader'
import Header from './Header'
import StatusHeader from './StatusHeader'
import StatusItem from './StatusItem'
import Dashboard from './Dashboard'
import '../styles/main.css'

const App = () => (
  <div>
    <Header />
    <Dashboard />
  </div>
)

export default hot(module)(App)
