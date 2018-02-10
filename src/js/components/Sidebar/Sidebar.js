import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icon from '../SimpleIcon/SimpleIcon';
import './Sidebar.css';

const Sidebar = props => (
  <ul className="sidebar unstyled-list">
    <li>
      <NavLink
        exact
        to="/subscriptions"
        className="home-link"
        activeClassName="active">
        <Icon name="home" title="Home" />
      </NavLink>
      <button
        className="unstyled-button check-button"
        onClick={props.onMarkAsReadClick}>
        <Icon name="check" title="Mark all as read" />
      </button>
      <button
        onClick={props.fetchAllFeedItems}
        className="unstyled-button reload-button">
        <Icon name="reload" title="Fetch new data" />
      </button>
      <NavLink
        exact
        to="/settings"
        className="settings-link"
        activeClassName="active">
        <Icon name="settings" title="Settings" />
      </NavLink>
    </li>
    <li className="list-item list-item--bookmarked">
      <NavLink
        to="/subscriptions/bookmarked"
        className="navigation-link navigation-link--bookmarked"
        activeClassName="active">
        Saved for later
      </NavLink>
      <span className="bookmarked-count">{props.bookmarkedItemCount}</span>
    </li>
    {props.subscriptionIds.map(id => (
      <li key={id}>
        <NavLink
          to={`/subscriptions/${id.toLowerCase()}`}
          className="navigation-link"
          activeClassName="active">
          {props.subscriptions[id].title}
        </NavLink>
        <span className="unread-count">
          {props.subscriptions[id].items.length /* && props.allFeedItems[id].unreadCount */}
        </span>
      </li>
    ))}
  </ul>
);

Sidebar.propTypes = {
  subscriptions: PropTypes.object,
  subscriptionIds: PropTypes.array,
  fetchAllFeedItems: PropTypes.func,
  onMarkAsReadClick: PropTypes.func,
  bookmarkedItemCount: PropTypes.number,
};

export default Sidebar;
