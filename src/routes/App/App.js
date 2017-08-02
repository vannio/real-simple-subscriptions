import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Subscriptions from '../Subscriptions';
import Settings from '../Settings/Settings';
import SidebarList from '../../components/SidebarList/SidebarList';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <div className="app-sidebar">
        <SidebarList />
      </div>
      <div className="app-content">
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/subscriptions'/>} />
          <Route exact path="/subscriptions" component={Subscriptions.index} />
          <Route path="/subscriptions/:id" component={Subscriptions.show} />
          <Route path="/settings" component={Settings} />
          <Route reder={() => ('Nothing to show!')}/>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
