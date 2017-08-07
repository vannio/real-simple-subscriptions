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
    {
      markAsRead: actions.markAsRead,
      updateUnreadCount: actions.updateUnreadCount
    }
  ),
  withHandlers({
    fetchAllFeedItems: () => () => fetchAllFeedItems(),
    onMarkAsReadClick: props => () => {
      props.subscriptionIds.forEach(
        subscriptionId => {
          if (!props.subscriptions[subscriptionId].error) {
            const itemIDs = props.allFeedItems[subscriptionId].items.map(item => item.id);
            props.markAsRead(subscriptionId, itemIDs);
            props.updateUnreadCount(subscriptionId);
          }
        }
      );
    }
  })
);

const Sidebar = props => (
  <ul className="sidebar-list unstyled-list">
    <li>
      <NavLink exact to="/subscriptions" className="home-link" activeClassName="active">
        <Icon name="home" title="Home" />
      </NavLink>
      <button className="unstyled-button check-button" onClick={props.onMarkAsReadClick}>
        <Icon name="check" title="Mark all as read" />
      </button>
      <button
        onClick={props.fetchAllFeedItems}
        className="unstyled-button reload-button">
        <Icon name="reload" title="Fetch new data" />
      </button>
      <NavLink exact to="/settings" className="settings-link" activeClassName="active">
        <Icon name="settings" title="Settings" />
      </NavLink>
    </li>
    {props.subscriptionIds.map(id => (
      <li key={id}>
        <NavLink to={`/subscriptions/${id.toLowerCase()}`} className="navigation-link" activeClassName="active">
          {props.subscriptions[id].title}
        </NavLink>
        <span className="unread-count">{props.allFeedItems[id] && props.allFeedItems[id].unreadCount}</span>
      </li>
    ))}
  </ul>
);

Sidebar.propTypes = {
  allFeedItems: PropTypes.object,
  subscriptions: PropTypes.object,
  subscriptionIds: PropTypes.array,
  fetchAllFeedItems: PropTypes.func,
  onMarkAsReadClick: PropTypes.func
};

export default enhance(Sidebar);
