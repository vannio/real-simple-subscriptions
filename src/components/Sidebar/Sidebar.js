import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const enhance = connect(
  state => ({
    subscriptions: state.subscriptions
  })
);

const Sidebar = ({ subscriptions }) => (
  <ul>
    {['Subscriptions', 'Settings'].map(route => (
      <li key={route}>
        <NavLink to={`/${route.toLowerCase()}`} activeClassName="active">{route}</NavLink>
      </li>
    ))}
    <hr />
    {Object.keys(subscriptions).map(id => (
      <li key={id}>
        <NavLink to={`/subscriptions/${id.toLowerCase()}`} activeClassName="active">
          {subscriptions[id].title}
        </NavLink>
      </li>
    ))}
  </ul>
);

Sidebar.propTypes = {
  subscriptions: PropTypes.object
};

export default enhance(Sidebar);
