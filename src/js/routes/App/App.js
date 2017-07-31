import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <div className="App-content">
        <Route exact path="/" render={() => (
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
        )} />
        <Route path="/settings" render={() => (
          <p>Settings here</p>
        )} />
      </div>
    </div>
  </Router>
);

export default App;
