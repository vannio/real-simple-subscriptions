import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Subscriptions from '../Subscriptions';
import Settings from '../Settings/Settings';
import SidebarList from '../../components/SidebarList/SidebarList';
import { COLOURS } from '../../data';
import './styles.css';

const enhance = compose(
  connect(
    state => ({
      accentColour: state.settings.accentColour,
    })
  ),
  lifecycle({
    componentDidMount() {
      window.document.documentElement.classList.add(this.props.accentColour.toLowerCase());
    }
  })
);

const App = ({ accentColour }) => (
  <Router>
    <div className="app">
      <div className="app-sidebar">
        <SidebarList />
      </div>
      <div className="app-content">
        <div className="container">
          <Switch>
            <Route exact path="/subscriptions" component={Subscriptions.index} />
            <Route path="/subscriptions/:id" component={Subscriptions.show} />
            <Route path="/settings" component={Settings} />
            <Route component={Subscriptions.index} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

App.propTypes = {
  accentColour: PropTypes.oneOf(COLOURS)
};

export default enhance(App);
