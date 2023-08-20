import React from 'react';
import StatusPanel from './StatusPanel';
import GraphPanel from './GraphPanel';
import Header from './Header';
import Footer from './Footer';
import '../styles/main.css';

const App = () => (
  <div id="app">
    <Header />
    <div className="container">
      <StatusPanel />
      <GraphPanel />
    </div>
    <Footer />
  </div>
);

export default (App);
