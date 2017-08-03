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
import * as actions from '../../actions';

const enhance = compose(
  connect(
    state => ({
      subscriptions: state.subscriptions,
      subscriptionIds: getSubscriptionKeys(state.subscriptions),
      allFeedItems: state.feedItems
    }),
    { markAsRead: actions.markAsRead }
  ),
  withHandlers({
    fetchAllFeedItems: () => () => fetchAllFeedItems(),
    onMarkAsReadClick: props => () => {
      const ids = props.subscriptionIds.reduce(
        (array, id) => array.concat(
          props.allFeedItems[id].items.map(item => item.id)
        ), []
      );
      props.markAsRead(ids);
    }
  })
);

const Sidebar = props => (
  <ul className="sidebar-list unstyled-list">
    <li>
      <NavLink exact to="/subscriptions" className="home-link" activeClassName="active">
        <Icon name="home" />
      </NavLink>
      <button className="unstyled-button check-button" onClick={props.onMarkAsReadClick}>
        <Icon name="check" />
      </button>
      <button
        onClick={props.fetchAllFeedItems}
        className="unstyled-button reload-button">
        <Icon name="reload" />
      </button>
      <NavLink exact to="/settings" className="settings-link" activeClassName="active">
        <Icon name="settings" />
      </NavLink>
    </li>
    {props.subscriptionIds.map(id => (
      <li key={id}>
        <NavLink to={`/subscriptions/${id.toLowerCase()}`} className="navigation-link" activeClassName="active">
          {props.subscriptions[id].title}
        </NavLink>
      </li>
    ))}
  </ul>
);

Sidebar.propTypes = {
  subscriptions: PropTypes.object,
  subscriptionIds: PropTypes.array,
  fetchAllFeedItems: PropTypes.func,
  onMarkAsReadClick: PropTypes.func
};

export default enhance(Sidebar);
