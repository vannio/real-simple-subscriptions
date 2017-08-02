import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import withHandlers from 'recompose/withHandlers';

const enhance = withHandlers({
  onCheckClick: props => () => {
    window.chrome.history.addUrl({ url: props.item.url });
  }
});

export const ListItem = ({ item, onCheckClick }) => (
  <li className="subscription-preview__list-item">
    <a href={item.url} target="_blank" rel="noreferrer noopener">
      <strong>{item.title}</strong>
    </a>
    <br />
    <em>{item.date}</em>
    <p>{item.description}</p>
    <button onClick={onCheckClick}>
      <Icon name="check" />
    </button>
  </li>
);

ListItem.propTypes = {
  item:  PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string
  }),
  onCheckClick: PropTypes.func
};

export default enhance(ListItem);
