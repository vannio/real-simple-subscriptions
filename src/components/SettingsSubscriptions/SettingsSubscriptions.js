import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import getBookmarks from '../../helpers/getBookmarks';
import Form from './Form';
import List from './List';
import './styles.css';

const enhance = compose(
  connect(
    state => ({ subscriptionFolder: state.settings.subscriptionFolder }),
    {
      addSubscription: actions.addSubscription,
      updateSettings: actions.updateSettings
    }
  ),
  withState('isFormNewExpanded', 'setIsFormNewExpanded', false),
  withState('isFormBookmarkExpanded', 'setIsFormBookmarkExpanded', false),
  withState('bookmarksList', 'setBookmarksList', []),
  withHandlers({
    onSetBookmarksList: props => array => props.setBookmarksList(array),
    onToggleFormNewExpanded: props => () => props.setIsFormNewExpanded(!props.isFormNewExpanded),
    onToggleBookmarkFormExpanded: props => () => props.setIsFormBookmarkExpanded(!props.isFormBookmarkExpanded),
    onFeedTitleChange: props => e => props.setFeedTitle(e.target.value),
    onFeedUrlChange: props => e => props.setFeedUrl(e.target.value),
    onAddSubscription: props => subscription => {
      props.addSubscription(subscription);
      props.setIsFormNewExpanded(false);
    },
    onUpdateSubscription: props => subscription => props.updateSubscription(subscription),
    onSaveSubscriptionFolder: props => e => {
      const subscriptionFolder = props.bookmarksList.find(bookmark => bookmark.id === e.target.value);
      props.updateSettings({ subscriptionFolder });
      props.setIsFormBookmarkExpanded(false);
    }
  }),
  lifecycle({
    componentDidMount() {
      window.chrome.bookmarks && window.chrome.bookmarks.getTree(tree => {
        this.props.onSetBookmarksList(getBookmarks(tree[0]).slice(1));
      });
    }
  })
);

export const SettingsSubscriptions = props => (
  <div className="settings-subscriptions">
    <h1>Subscriptions</h1>
    <div className="settings-subscriptions__group">
      {props.isFormBookmarkExpanded ? (
        <div>
          <strong>Import from bookmarks folder</strong>
          <select onChange={props.onSaveSubscriptionFolder}
            id="feedFolderID"
            value={props.subscriptionFolder.id}>
            <option value="-1">---</option>
            {props.bookmarksList.map(bookmark => (
              <option value={bookmark.id} key={bookmark.id}>
                {'\u00A0'.repeat((bookmark.depth - 1) * 3)}
                {bookmark.title}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div onClick={props.onToggleBookmarkFormExpanded}>
          <strong>Import from bookmarks folder</strong>
          {props.subscriptionFolder.title}
        </div>
      )}
    </div>
    <div className="settings-subscriptions__group">
      {props.isFormNewExpanded ? (
        <Form handleSubmit={props.onAddSubscription} onClick={props.onToggleFormNewExpanded}>
          <button type="button" className="button">Close</button>
        </Form>
      ) : (
        <button className="button" onClick={props.onToggleFormNewExpanded}>
          Add subscription
        </button>
      )}
      <List />
    </div>
  </div>
);

SettingsSubscriptions.propTypes = {
  subscriptionFolder: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }),
  onAddSubscription: PropTypes.func,
  onUpdateSubscription: PropTypes.func,
  isFormNewExpanded: PropTypes.bool,
  onToggleFormNewExpanded: PropTypes.func,
  onToggleBookmarkFormExpanded: PropTypes.func,
  isFormBookmarkExpanded: PropTypes.bool,
  onSaveSubscriptionFolder: PropTypes.func,
  bookmarksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      depth: PropTypes.number
    })
  )
};

export default enhance(SettingsSubscriptions);
