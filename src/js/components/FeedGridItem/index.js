import withHandlers from 'recompose/withHandlers';
import mapProps from 'recompose/mapProps';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  toggleMarkedAsRead,
  toggleBookmarkFeedItem,
} from '../../store/actions';
import { isFeedItemRead, isFeedItemBookmarked } from '../../store/selectors';
import { getConfig } from '../../store/selectors/config';
import { getFirstParagraph } from '../../utils/getFirstParagraph';
import formatDate from '../../utils/formatDate';

import FeedGridItem from './FeedGridItem';

const enhance = compose(
  connect(
    (state, props) => {
      const config = getConfig(state);
      return {
        ...config,
        isBookmarked: isFeedItemBookmarked(
          state,
          props.subscriptionId,
          props.item.id,
        ),
        isMarkedRead: isFeedItemRead(
          state,
          props.subscriptionId,
          props.item.id,
        ),
      };
    },
    {
      toggleMarkedAsRead,
      toggleBookmarkFeedItem,
    },
  ),
  withHandlers({
    onToggleMarkedAsRead: props => () => {
      props.toggleMarkedAsRead(props.subscriptionId, props.item.id);
    },
    onToggleBookmarked: props => () => {
      props.toggleBookmarkFeedItem(props.subscriptionId, props.item.id);
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
  mapProps(({ isBookmarked, isMarkedRead, showImages, ...props }) => ({
    ...props,
    pubDate: formatDate(props.item.pubDate),
    content:
      props.showContent === 'full'
        ? props.item.content
        : getFirstParagraph(props.item.content),
    isSummaryVisible: !isMarkedRead && props.showSummary,
    isContentVisible: !isMarkedRead && props.showContent !== 'none',
    bookmarkedLabel: isBookmarked ? 'Un-bookmark' : 'Bookmark',
    bookmarkedIcon: isBookmarked ? 'bookmark' : 'unbookmark',
    markedReadIcon: isMarkedRead ? 'cross' : 'check',
    markedReadLabel: isMarkedRead ? 'Unmark as read' : 'Mark as read',
    classNames: `${isMarkedRead ? 'feed-grid-item--marked-read' : ''}
    ${showImages ? '' : 'feed-grid-item--hide-images'}`,
  })),
);

export default enhance(FeedGridItem);
