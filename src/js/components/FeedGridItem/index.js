import withHandlers from 'recompose/withHandlers';
import mapProps from 'recompose/mapProps';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  toggleMarkedAsRead,
  toggleBookmarkFeedItem,
} from '../../store/actions/subscriptions';
import {
  isFeedItemRead,
  isFeedItemBookmarked,
} from '../../store/selectors/subscriptions';
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
    (dispatch, props) => ({
      toggleMarkedAsRead: () => dispatch(toggleMarkedAsRead(props.subscriptionId, props.item.id)),
      toggleBookmarkFeedItem: () => dispatch(toggleBookmarkFeedItem(props.subscriptionId, props.item.id)),
    }),
  ),
  withHandlers({
    onToggleBookmarked: props => () => {
      props.toggleBookmarkFeedItem();
    },
    onOpenItemLink: props => e => {
      if (props.readOnOpen && !props.isMarkedRead) {
        props.toggleMarkedAsRead();
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
