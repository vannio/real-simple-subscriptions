import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import * as actions from '../../actions/index';
import { isFeedItemRead, isFeedItemBookmarked } from '../../ducks/index';

import FeedGridItem from './FeedGridItem';

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

export default enhance(FeedGridItem);
