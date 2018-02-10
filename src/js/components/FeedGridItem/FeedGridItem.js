import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../SimpleIcon/SimpleIcon';
import formatDate from '../../utils/formatDate';

export const ListItem = props => (
  <li
    className={`feed-grid-item
    ${props.isMarkedRead ? 'feed-grid-item--marked-read' : ''}
    ${props.showImages ? '' : 'feed-grid-item--hide-images'}`}>
    <span className="feed-grid-item__date">
      {formatDate(props.item.pubDate)}
    </span>
    <h3 className="feed-grid-item__title">
      <a
        href={props.item.link}
        target="_blank"
        rel="noreferrer noopener"
        onClick={props.onOpenItemLink}
        dangerouslySetInnerHTML={{ __html: props.item.title }}
      />
    </h3>
    {props.isSummaryVisible && (
      <p
        className="feed-grid-item__description"
        onClick={props.onOpenLinksInNewTab}
        dangerouslySetInnerHTML={{ __html: props.item.description }}
      />
    )}
    {props.isContentVisible && (
      <p
        className="feed-grid-item__content"
        onClick={props.onOpenLinksInNewTab}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    )}
    <a
      href={props.item.url}
      target="_blank"
      rel="noreferrer noopener"
      className="feed-grid-item__link"
      onClick={props.onOpenItemLink}>
      <Icon name="link" size="small" title={props.item.title} />
    </a>
    <button className="unstyled-button" onClick={props.onToggleBookmarked}>
      {props.isBookmarked ? (
        <Icon name="bookmark" size="small" title="Un-bookmark" />
      ) : (
        <Icon name="unbookmark" size="small" title="Bookmark" />
      )}
    </button>
    <button className="unstyled-button" onClick={props.onToggleMarkedAsRead}>
      {props.isMarkedRead ? (
        <Icon name="cross" size="small" title="Unmark as read" />
      ) : (
        <Icon name="check" size="small" title="Mark as read" />
      )}
    </button>
  </li>
);

ListItem.propTypes = {
  onOpenItemLink: PropTypes.func,
  onOpenLinksInNewTab: PropTypes.func,
  onToggleMarkedAsRead: PropTypes.func,
  onToggleBookmarked: PropTypes.func,
  content: PropTypes.string,
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    pubDate: PropTypes.string,
    link: PropTypes.string,
  }),
  showImages: PropTypes.bool,
  isMarkedRead: PropTypes.bool,
  isBookmarked: PropTypes.bool,
  isSummaryVisible: PropTypes.bool,
  isContentVisible: PropTypes.bool,
};

export default ListItem;
