import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import Icon from '../Icon/Icon';
import { getSubscriptionKeys } from '../../ducks';
import './styles.css';
import { fetchAllFeedItems } from '../../helpers/chrome';

const enhance = compose(
  connect(
    state => ({
      subscriptions: state.subscriptions,
      subscriptionIds: getSubscriptionKeys(state.subscriptions)
    })
  ),
  withHandlers({
    fetchAllFeedItems: () => () => fetchAllFeedItems()
  })
);

const Sidebar = props => (
  <ul className="sidebar-list unstyled-list">
    <li>
      <NavLink exact to="/settings" className="settings-link" activeClassName="active">
        <Icon name="settings" />
      </NavLink>
      <button
        onClick={props.fetchAllFeedItems}
        className="unstyled-button">
        <Icon name="reload" />
      </button>
    </li>
    <li>
      <NavLink exact to="/subscriptions" className="navigation-link" activeClassName="active">All</NavLink>
      <button className="unstyled-button">
        <Icon name="check" size="small" />
      </button>
    </li>
    {props.subscriptionIds.map(id => (
      <li key={id}>
        <NavLink to={`/subscriptions/${id.toLowerCase()}`} className="navigation-link" activeClassName="active">
          {props.subscriptions[id].title}
        </NavLink>
        <button className="unstyled-button">
          <Icon name="check" size="small" />
        </button>
      </li>
    ))}
  </ul>
);

Sidebar.propTypes = {
  subscriptions: PropTypes.object,
  subscriptionIds: PropTypes.array,
  fetchAllFeedItems: PropTypes.func
};

export default enhance(Sidebar);
