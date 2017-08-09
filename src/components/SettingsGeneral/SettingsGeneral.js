import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { COLOUR_MAP, SHOW_CONTENT_MAP } from '../../data';
import pick from 'lodash/fp/pick';
import './styles.css';

const enhance = compose(
  connect(
    state => ({
      maxCount: state.settings.maxCount,
      fetchInterval: state.settings.fetchInterval,
      accentColour: state.settings.accentColour,
      readOnOpen: state.settings.readOnOpen,
      hideRead: state.settings.hideRead,
      showSummary: state.settings.showSummary,
      showContent: state.settings.showContent,
      showImages: state.settings.showImages,
      settingsFields: Object.keys(state.settings)
    }),
    { saveSettings: actions.saveSettings }
  ),
  withState('isEditable', 'setIsEditable', false),
  withState('maxCount', 'setMaxCount', props => props.maxCount),
  withState('fetchInterval', 'setFetchInterval', props => props.fetchInterval),
  withState('accentColour', 'setAccentColour', props => props.accentColour),
  withState('readOnOpen', 'setReadOnOpen', props => props.readOnOpen),
  withState('hideRead', 'setHideRead', props => props.hideRead),
  withState('showSummary', 'setShowSummary', props => props.showSummary),
  withState('showContent', 'setShowContent', props => props.showContent),
  withState('showImages', 'setShowImages', props => props.showImages),
  withHandlers({
    onToggleEdit: props => () => props.setIsEditable(!props.isEditable),
    onMaxCountChange: props => e => props.setMaxCount(parseInt(e.target.value, 10)),
    onFetchIntervalChange: props => e => props.setFetchInterval(parseInt(e.target.value, 10)),
    onAccentColourChange: props => e => props.setAccentColour(e.target.value),
    onToggleReadOnOpen: props => e => props.setReadOnOpen(e.target.checked),
    onToggleHideRead: props => e => props.setHideRead(e.target.checked),
    onToggleShowSummary: props => e => props.setShowSummary(e.target.checked),
    onShowContentChange: props => e => props.setShowContent(e.target.value),
    onToggleShowImages: props => e => props.setShowImages(e.target.checked),
    onSubmitForm: props => e => {
      e.preventDefault();
      const settings = pick(props.settingsFields)(props);
      props.saveSettings(settings);
      props.setIsEditable(false);
    }
  })
);

const SettingsForm = props => (
  <div className="settings-form">
    {props.isEditable ? (
      <form onSubmit={props.onSubmitForm}>
        <ul className="unstyled-list">
          <li>
            <label htmlFor="maxCount"><strong>Maximum items to display</strong></label>
            <input type="number"
              id="maxCount"
              onChange={props.onMaxCountChange}
              value={props.maxCount} min={1}
              className="text-input" />
          </li>
          <li>
            <label htmlFor="fetchInterval"><strong>Background fetch interval (minutes)</strong></label>
            <input type="number"
              id="fetchInterval"
              onChange={props.onFetchIntervalChange}
              value={props.fetchInterval} min={1}
              className="text-input" />
          </li>
          <li>
            <label htmlFor="accentColour"><strong>Accent Colour</strong></label>
            <select id="accentColour" onChange={props.onAccentColourChange} value={props.accentColour}>
              {COLOUR_MAP.map(colour => (
                <option value={colour} key={colour}>{colour}</option>
              ))}
            </select>
          </li>
          <li>
            <label htmlFor="readOnOpen"><strong>Mark as read after viewing</strong></label>
            <input type="checkbox"
              id="readOnOpen"
              onChange={props.onToggleReadOnOpen}
              checked={props.readOnOpen} />
          </li>
          <li>
            <label htmlFor="hideRead"><strong>Remove from list when viewed</strong></label>
            <input type="checkbox"
              id="hideRead"
              onChange={props.onToggleHideRead}
              checked={props.hideRead} />
          </li>
          <li><strong>Articles display:</strong>
            <ul>
              <li>
                <label htmlFor="showSummary"><strong>Summary</strong></label>
                <input type="checkbox"
                  id="showSummary"
                  onChange={props.onToggleShowSummary}
                  checked={props.showSummary} />
              </li>
              <li>
                <label htmlFor="showContent"><strong>Content</strong></label>
                <select id="showContent" onChange={props.onShowContentChange} value={props.showContent}>
                  {Object.keys(SHOW_CONTENT_MAP).map(key =>
                    <option key={key} value={key}>{SHOW_CONTENT_MAP[key]}</option>
                  )}
                </select>
              </li>
              <li>
                <label htmlFor="showImages"><strong>Images</strong></label>
                <input type="checkbox"
                  id="showImages"
                  onChange={props.onToggleShowImages}
                  checked={props.showImages} />
              </li>
            </ul>
          </li>
        </ul>
        <button className="button" type="submit">Update</button>
        <button className="button" type="button" onClick={props.onToggleEdit}>Close</button>
      </form>
    ) : (
      <ul onClick={props.onToggleEdit}
        className="unstyled-list">
        <li><strong>Maximum items to display</strong>{props.maxCount}</li>
        <li><strong>Background fetch interval</strong>{props.fetchInterval} minutes</li>
        <li><strong>Accent Colour</strong>{props.accentColour}</li>
        <li><strong>Mark as read after viewing</strong>{props.readOnOpen ? '✔' : '✘'}</li>
        <li><strong>Remove from list when viewed</strong>{props.hideRead ? '✔' : '✘'}</li>
        <li><strong>Articles display:</strong>
          <ul>
            <li><strong>Summary</strong>{props.showSummary ? '✔' : '✘'}</li>
            <li><strong>Content</strong>{props.showContent}</li>
            <li><strong>Images</strong>{props.showImages ? '✔' : '✘'}</li>
          </ul>
        </li>
      </ul>
    )}
  </div>
);

SettingsForm.propTypes = {
  isEditable: PropTypes.bool,
  onToggleEdit: PropTypes.func,
  onSubmitForm: PropTypes.func,
  onMaxCountChange: PropTypes.func,
  onFetchIntervalChange: PropTypes.func,
  onAccentColourChange: PropTypes.func,
  onToggleReadOnOpen: PropTypes.func,
  onToggleHideRead: PropTypes.func,
  onToggleShowSummary: PropTypes.func,
  onShowContentChange: PropTypes.func,
  onToggleShowImages: PropTypes.func,
  maxCount: PropTypes.number,
  fetchInterval: PropTypes.number,
  accentColour: PropTypes.oneOf(COLOUR_MAP),
  readOnOpen: PropTypes.bool,
  hideRead: PropTypes.bool,
  showSummary: PropTypes.bool,
  showContent: PropTypes.string,
  showImages: PropTypes.bool
};

export default enhance(SettingsForm);
