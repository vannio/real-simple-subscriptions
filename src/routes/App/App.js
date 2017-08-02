import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Settings from '../Settings/Settings';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <div className="app-header">
        <ul>
          {['Homepage', 'Settings'].map(route => (
            <li key={route}>
              <Link to={route === 'Homepage' ? '/' : route.toLowerCase()}>{route}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="app-content">
        <Route exact path="/" component={Homepage} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  </Router>
);

export default App;
