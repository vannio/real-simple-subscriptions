import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = ({ item }) => (
  <li className="subscription-preview__list-item">
    <strong>{item.title}</strong>
    <em>{item.timeStamp}</em>
    <p>{item.description}</p>
  </li>
);

ListItem.propTypes = {
  item:  PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    timeStamp: PropTypes.number
  })
};

export default ListItem;
