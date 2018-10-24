import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';
import '../styles/main.css';

const App = () => (
  <div id="app">
    <Header />
    <Dashboard />
    <Footer />
  </div>
);

export default hot(module)(App);
