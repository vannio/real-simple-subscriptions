import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Settings from '../../routes/Settings';
import Bookmarked from '../../routes/Bookmarked';
import Home from '../../routes/Home';
import Subscription from '../../routes/Subscription';

import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <div className="app-sidebar">
        <Sidebar />
      </div>
      <div className="app-content">
        <div className="container">
          <Switch>
            <Route exact path="/subscriptions/bookmarked" component={Bookmarked} />
            <Route path="/subscriptions/:id" component={Subscription} />
            <Route path="/settings" component={Settings} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
