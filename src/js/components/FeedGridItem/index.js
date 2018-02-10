import withHandlers from 'recompose/withHandlers';
import withProps from 'recompose/withProps';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  markAsRead,
  unmarkAsRead,
  updateUnreadCount,
  unbookmarkFeedItem,
  bookmarkFeedItem,
} from '../../store/actions';
import { isFeedItemRead, isFeedItemBookmarked } from '../../store/selectors';
import { getFirstParagraph } from '../../utils/getFirstParagraph';

import FeedGridItem from './FeedGridItem';

const enhance = compose(
  connect(
    (state, props) => ({
      readOnOpen: state.config.readOnOpen,
      showSummary: state.config.showSummary,
      showContent: state.config.showContent,
      showImages: state.config.showImages,
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
    }),
    {
      markAsRead,
      unmarkAsRead,
      updateUnreadCount,
      unbookmarkFeedItem,
      bookmarkFeedItem,
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
  withProps(props => ({
    content:
      props.showContent === 'full'
        ? props.item.content
        : getFirstParagraph(props.item.content),
    isSummaryVisible: !props.isMarkedRead && props.showSummary,
    isContentVisible: !props.isMarkedRead && props.showContent !== 'none',
  })),
);

export default enhance(FeedGridItem);
