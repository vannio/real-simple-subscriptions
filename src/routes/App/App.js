import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Subscriptions from '../Subscriptions';
import Settings from '../Settings/Settings';
import SidebarList from '../../components/SidebarList/SidebarList';
import { COLOURS } from '../../data';
import './App.css';

const enhance = compose(
  connect(
    state => ({
      accentColour: state.settings.accentColour,
    })
  )
);

const App = ({ accentColour }) => (
  <Router>
    <div className={`app app--${accentColour && accentColour.toLowerCase()}`}>
      <div className="app-sidebar">
        <SidebarList />
      </div>
      <div className="app-content">
        <Switch>
          <Route exact path="/subscriptions" component={Subscriptions.index} />
          <Route path="/subscriptions/:id" component={Subscriptions.show} />
          <Route path="/settings" component={Settings} />
          <Route component={Subscriptions.index} />
        </Switch>
      </div>
    </div>
  </Router>
);

App.propTypes = {
  accentColour: PropTypes.oneOf(COLOURS)
};

export default enhance(App);
