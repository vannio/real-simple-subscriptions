import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../SimpleIcon/SimpleIcon';

export const ListItem = props => (
  <li className={`feed-grid-item ${props.classNames}`}>
    <span className="feed-grid-item__date">
      {props.pubDate}
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
      href={props.item.link}
      target="_blank"
      rel="noreferrer noopener"
      className="feed-grid-item__link"
      onClick={props.onOpenItemLink}>
      <Icon name="link" size="small" title={props.item.title} />
    </a>
    <button className="unstyled-button" onClick={props.onToggleBookmarked}>
      <Icon
        size="small"
        name={props.bookmarkedIcon}
        title={props.bookmarkedLabel}
      />
    </button>
    <button className="unstyled-button" onClick={props.onToggleMarkedAsRead}>
      <Icon
        name={props.markedReadIcon}
        size="small"
        title={props.markedReadLabel}
      />
    </button>
  </li>
);

ListItem.propTypes = {
  classNames: PropTypes.string.isRequired,
  onOpenItemLink: PropTypes.func,
  onOpenLinksInNewTab: PropTypes.func,
  onToggleMarkedAsRead: PropTypes.func,
  onToggleBookmarked: PropTypes.func,
  pubDate: PropTypes.string,
  content: PropTypes.string,
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }),
  markedReadIcon: PropTypes.string.isRequired,
  markedReadLabel: PropTypes.string.isRequired,
  bookmarkedIcon: PropTypes.string.isRequired,
  bookmarkedLabel: PropTypes.string.isRequired,
  isSummaryVisible: PropTypes.bool,
  isContentVisible: PropTypes.bool,
};

export default ListItem;
