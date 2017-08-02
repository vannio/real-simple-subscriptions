import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = ({ item }) => (
  <li className="subscription-preview__list-item">
    <a href={item.url} target="_blank" rel="noreferrer noopener">
      <strong>{item.title}</strong>
    </a>
    <br />
    <em>{item.date}</em>
    <p>{item.description}</p>
  </li>
);

ListItem.propTypes = {
  item:  PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.number,
    url: PropTypes.string
  })
};

export default ListItem;
