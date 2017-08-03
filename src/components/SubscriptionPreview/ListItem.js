import React from 'react';
import PropTypes from 'prop-types';
import withHandlers from 'recompose/withHandlers';
import Icon from '../Icon/Icon';

const enhance = withHandlers({
  onCheckClick: props => () => {
    window.chrome.history.addUrl({ url: props.item.url });
  }
});

const formateDate = date => {
  if (date.length > 0) {
    var options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    var d = new Date(date.toString());
    return d.toLocaleTimeString('en-gb', options);
  }
  return date;
};

export const ListItem = ({ item, onCheckClick }) => (
  <li className="list-item">
    <span className="list-item__date">{formateDate(item.date)}</span>
    <h3 className="list-item__title">
      <a href={item.url}
        target="_blank"
        rel="noreferrer noopener"
        onClick={this.handleClickText}
        dangerouslySetInnerHTML={{__html: item.title}}
      />
    </h3>
    <p className="list-item__description" dangerouslySetInnerHTML={{__html: item.content}} />
    <Icon name="check" />
    <Icon name="link" />
  </li>
);

ListItem.propTypes = {
  item:  PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string
  }),
  onCheckClick: PropTypes.func
};

export default enhance(ListItem);
