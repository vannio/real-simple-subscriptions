import React from 'react';
import PropTypes from 'prop-types';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Icon from '../Icon/Icon';
import formatDate from '../../helpers/formatDate';
import { getFirstParagraph } from '../../helpers/transformXML';
import * as actions from '../../actions';
import { isFeedItemRead } from '../../ducks';

const enhance = compose(
  connect(
    (state, ownProps) => ({
      readOnOpen: state.settings.readOnOpen,
      showSummary: state.settings.showSummary,
      showContent: state.settings.showContent,
      showImages: state.settings.showImages,
      isMarkedRead: isFeedItemRead(state, ownProps.subscriptionId, ownProps.item.id)
    }),
    {
      markAsRead: actions.markAsRead,
      updateUnreadCount: actions.updateUnreadCount
    }
  ),
  withHandlers({
    onMarkAsReadClick: props => () => {
      props.markAsRead(props.subscriptionId, props.item.id);
      props.updateUnreadCount(props.subscriptionId);
    },
    onClickLink: props => e => {
      if (props.readOnOpen) {
        props.markAsRead(props.subscriptionId, props.item.id);
        props.updateUnreadCount(props.subscriptionId);
      }
    },
    onOpenLinksInNewTab: props => e => {
      e.preventDefault();

      if (e.target.href) {
        window.open(e.target.href, '_blank');
      }

      if (e.target.parentNode.href) {
        window.open(e.target.parentNode.href, '_blank');
      }
    }
  })
);

export const ListItem = props => (
  <li className={`list-item
    ${props.isMarkedRead ? 'list-item--marked-read' : ''}
    ${props.showImages ? '' : 'list-item--hide-images'}`
  }>
    <span className="list-item__date">{formatDate(props.item.date)}</span>
    <h3 className="list-item__title">
      <a href={props.item.url}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.onClickLink}
        dangerouslySetInnerHTML={{__html: props.item.title}}
      />
    </h3>
    {!props.isMarkedRead && props.showSummary && (
      <p className="list-item__description"
        onClick={props.onOpenLinksInNewTab}
        dangerouslySetInnerHTML={{__html: props.item.description}} />
    )}
    {!props.isMarkedRead && props.showContent !== 'none' && (
      <p className="list-item__content"
        onClick={props.onOpenLinksInNewTab}
        dangerouslySetInnerHTML={{__html:
          props.showContent === 'full' ? props.item.content : getFirstParagraph(props.item.content)
        }} />
    )}
    {!props.isMarkedRead &&
      <button className="unstyled-button" onClick={props.onMarkAsReadClick}>
        <Icon name="check" size="small" title="Mark all as read" />
      </button>
    }
    <a href={props.item.url}
      target="_blank"
      rel="noreferrer noopener"
      className="list-item__link"
      onClick={props.onClickLink}>
      <Icon name="link" size="small" title={props.item.title} />
    </a>
  </li>
);

ListItem.propTypes = {
  onMarkAsReadClick: PropTypes.func,
  onOpenLinksInNewTab: PropTypes.func,
  onClickLink: PropTypes.func,
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string
  }),
  showSummary: PropTypes.bool,
  showContent: PropTypes.string,
  showImages: PropTypes.bool,
  isMarkedRead: PropTypes.bool
};

export default enhance(ListItem);
