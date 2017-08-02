import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom';
import Subscriptions from '../Subscriptions';
import Settings from '../Settings/Settings';
import Sidebar from '../../components/Sidebar/Sidebar';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <div className="app-sidebar">
        <Sidebar />
      </div>
      <div className="app-content">
        <Route exact path="/" render={() => <Redirect to='/subscriptions'/>} />
        <Route exact path="/subscriptions" component={Subscriptions.index} />
        <Route path="/subscriptions/:id" component={Subscriptions.show} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  </Router>
);

export default App;
