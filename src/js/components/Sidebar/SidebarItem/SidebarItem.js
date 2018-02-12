import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarItem = props => (
  <li>
    <NavLink
      to={`/subscriptions/${props.subscriptionId.toLowerCase()}`}
      className="navigation-link"
      activeClassName="active">
      {props.subscription.title}
    </NavLink>
    <span className="unread-count">{props.unreadCount}</span>
  </li>
);

SidebarItem.propTypes = {
  subscriptionId: PropTypes.string.isRequired,
  subscription: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    markedAsRead: PropTypes.array.isRequired,
  }).isRequired,
  unreadCount: PropTypes.number,
};

export default SidebarItem;
