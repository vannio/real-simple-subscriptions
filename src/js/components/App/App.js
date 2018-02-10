import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { COLOUR_MAP } from '../../../config';
import Sidebar from '../Sidebar';
import Settings from '../../routes/Settings';
import Bookmarked from '../../routes/Subscriptions/Bookmarked';
import Home from '../../routes/Subscriptions/Home';
import Show from '../../routes/Subscriptions/Show';

import './App.css';

const App = ({ accentColour }) => (
  <Router>
    <div className="app">
      <div className="app-sidebar">
        <Sidebar />
      </div>
      <div className="app-content">
        <div className="container">
          <Switch>
            <Route exact path="/subscriptions/bookmarked" component={Bookmarked} />
            <Route path="/subscriptions/:id" component={Show} />
            <Route path="/settings" component={Settings} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

App.propTypes = {
  accentColour: PropTypes.oneOf(COLOUR_MAP),
};

export default App;
