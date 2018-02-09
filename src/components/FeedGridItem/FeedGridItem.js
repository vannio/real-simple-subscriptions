import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../SimpleIcon/SimpleIcon';
import formatDate from '../../utils/formatDate';
import { getFirstParagraph } from '../../utils/getFirstParagraph';

export const ListItem = props => (
  <li
    className={`feed-grid-item
    ${props.isMarkedRead ? 'feed-grid-item--marked-read' : ''}
    ${props.showImages ? '' : 'feed-grid-item--hide-images'}`}>
    <span className="feed-grid-item__date">{formatDate(props.item.pubDate)}</span>
    <h3 className="feed-grid-item__title">
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
          className="feed-grid-item__description"
          onClick={props.onOpenLinksInNewTab}
          dangerouslySetInnerHTML={{ __html: props.item.description }}
        />
      )}
    {!props.isMarkedRead &&
      props.showContent !== 'none' && (
        <p
          className="feed-grid-item__content"
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
      className="feed-grid-item__link"
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

export default (ListItem);
