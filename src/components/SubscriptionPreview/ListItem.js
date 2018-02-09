import React from 'react';
import PropTypes from 'prop-types';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Icon from '../Icon/Icon';
import formatDate from '../../utils/formatDate';
import { getFirstParagraph } from '../../utils/getFirstParagraph';
import * as actions from '../../actions';
import { isFeedItemRead, isFeedItemBookmarked } from '../../ducks';

const enhance = compose(
  connect(
    (state, ownProps) => ({
      readOnOpen: state.settings.readOnOpen,
      showSummary: state.settings.showSummary,
      showContent: state.settings.showContent,
      showImages: state.settings.showImages,
      isBookmarked: isFeedItemBookmarked(
        state,
        ownProps.subscriptionId,
        ownProps.item.id,
      ),
      isMarkedRead: isFeedItemRead(
        state,
        ownProps.subscriptionId,
        ownProps.item.id,
      ),
    }),
    {
      markAsRead: actions.markAsRead,
      unmarkAsRead: actions.unmarkAsRead,
      updateUnreadCount: actions.updateUnreadCount,
      unbookmarkFeedItem: actions.unbookmarkFeedItem,
      bookmarkFeedItem: actions.bookmarkFeedItem,
    },
  ),
  withHandlers({
    onToggleMarkedAsRead: props => () => {
      if (props.isMarkedRead) {
        props.unmarkAsRead(props.subscriptionId, props.item.id);
      } else {
        props.markAsRead(props.subscriptionId, props.item.id);
      }
      props.updateUnreadCount(props.subscriptionId);
    },
    onToggleBookmarked: props => () => {
      if (props.isBookmarked) {
        props.unbookmarkFeedItem(props.subscriptionId, props.item.id);
      } else {
        props.bookmarkFeedItem(props.subscriptionId, props.item.id);
      }
    },
    onOpenItemLink: props => e => {
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
    },
  }),
);

export const ListItem = props => (
  <li
    className={`list-item
    ${props.isMarkedRead ? 'list-item--marked-read' : ''}
    ${props.showImages ? '' : 'list-item--hide-images'}`}>
    <span className="list-item__date">{formatDate(props.item.pubDate)}</span>
    <h3 className="list-item__title">
      <a
        href={props.item.url}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.onOpenItemLink}
        dangerouslySetInnerHTML={{ __html: props.item.title }}
      />
    </h3>
    {!props.isMarkedRead &&
      props.showSummary && (
        <p
          className="list-item__description"
          onClick={props.onOpenLinksInNewTab}
          dangerouslySetInnerHTML={{ __html: props.item.description }}
        />
      )}
    {!props.isMarkedRead &&
      props.showContent !== 'none' && (
        <p
          className="list-item__content"
          onClick={props.onOpenLinksInNewTab}
          dangerouslySetInnerHTML={{
            __html:
              props.showContent === 'full'
                ? props.item.content
                : getFirstParagraph(props.item.content),
          }}
        />
      )}
    <a
      href={props.item.url}
      target="_blank"
      rel="noreferrer noopener"
      className="list-item__link"
      onClick={props.onOpenItemLink}>
      <Icon name="link" size="small" title={props.item.title} />
    </a>
    {props.isBookmarked ? (
      <button className="unstyled-button" onClick={props.onToggleBookmarked}>
        <Icon name="bookmark" size="small" title="Un-bookmark" />
      </button>
    ) : (
      <button className="unstyled-button" onClick={props.onToggleBookmarked}>
        <Icon name="unbookmark" size="small" title="Bookmark" />
      </button>
    )}
    {props.isMarkedRead ? (
      <button className="unstyled-button" onClick={props.onToggleMarkedAsRead}>
        <Icon name="cross" size="small" title="Unmark as read" />
      </button>
    ) : (
      <button className="unstyled-button" onClick={props.onToggleMarkedAsRead}>
        <Icon name="check" size="small" title="Mark as read" />
      </button>
    )}
  </li>
);

ListItem.propTypes = {
  onOpenItemLink: PropTypes.func,
  onOpenLinksInNewTab: PropTypes.func,
  onToggleMarkedAsRead: PropTypes.func,
  onToggleBookmarked: PropTypes.func,
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    pubDate: PropTypes.string,
    url: PropTypes.string,
  }),
  showSummary: PropTypes.bool,
  showContent: PropTypes.string,
  showImages: PropTypes.bool,
  isMarkedRead: PropTypes.bool,
  isBookmarked: PropTypes.bool,
};

export default enhance(ListItem);
