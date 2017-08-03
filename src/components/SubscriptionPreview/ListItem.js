import React from 'react';
import PropTypes from 'prop-types';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Icon from '../Icon/Icon';
import formatDate from '../../helpers/formatDate';
import * as actions from '../../actions';

const enhance = compose(
  connect(
    state => ({ readOnOpen: state.settings.readOnOpen }),
    { markAsRead: actions.markAsRead }
  ),
  withHandlers({
    onMarkAsReadClick: props => () => props.markAsRead(props.item.id),
    onClickLink: props => e => props.readOnOpen && props.markAsRead(props.item.id)
  })
);

export const ListItem = ({ item, onMarkAsReadClick, onClickLink }) => (
  <li className="list-item">
    <span className="list-item__date">{formatDate(item.date)}</span>
    <h3 className="list-item__title">
      <a href={item.url}
        target="_blank"
        rel="noreferrer noopener"
        onClick={onClickLink}
        dangerouslySetInnerHTML={{__html: item.title}}
      />
    </h3>
    <p className="list-item__description" dangerouslySetInnerHTML={{__html: item.content}} />
    <button className="unstyled-button" onClick={onMarkAsReadClick}>
      <Icon name="check" size="small" />
    </button>
    <a href={item.url}
      target="_blank"
      rel="noreferrer noopener"
      className="list-item__link"
      onClick={onClickLink}>
      <Icon name="link" size="small" />
    </a>
  </li>
);

ListItem.propTypes = {
  onMarkAsReadClick: PropTypes.func,
  onClickLink: PropTypes.func,
  item: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string
  })
};

export default enhance(ListItem);
