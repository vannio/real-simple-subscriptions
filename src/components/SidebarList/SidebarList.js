import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Icon from '../Icon/Icon';
import { getSubscriptionKeys } from '../../ducks';
import './styles.css';

const enhance = connect(
  state => ({
    subscriptions: state.subscriptions,
    subscriptionIds: getSubscriptionKeys(state.subscriptions)
  })
);

const Sidebar = ({ subscriptions, subscriptionIds }) => (
  <ul className="sidebar-list unstyled-list">
    <li>
      <NavLink exact to="/settings" className="settings-link" activeClassName="active">
        <Icon name="settings" />
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/subscriptions" activeClassName="active">All</NavLink>
    </li>
    {subscriptionIds.map(id => (
      <li key={id}>
        <NavLink to={`/subscriptions/${id.toLowerCase()}`} activeClassName="active">
          {subscriptions[id].title}
        </NavLink>
      </li>
    ))}
  </ul>
);

Sidebar.propTypes = {
  subscriptions: PropTypes.object,
  subscriptionIds: PropTypes.array
};

export default enhance(Sidebar);