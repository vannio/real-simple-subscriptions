import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import SettingsForm from '../../components/SettingsForm/SettingsForm';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <div className="app-header">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <div className="app-content">
        <Route exact path="/" render={() => (
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
        )} />
        <Route path="/settings" render={() => (
          <SettingsForm />
        )} />
      </div>
    </div>
  </Router>
);

export default App;
