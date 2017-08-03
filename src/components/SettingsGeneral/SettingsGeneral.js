import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { COLOURS } from '../../data';

const enhance = compose(
  connect(
    state => ({
      maxCount: state.settings.maxCount,
      readOnOpen: state.settings.readOnOpen,
      fetchInterval: state.settings.fetchInterval,
      accentColour: state.settings.accentColour
    }),
    { updateSettings: actions.updateSettings }
  ),
  withState('isEditable', 'setIsEditable', false),
  withState('maxCount', 'setMaxCount', props => props.maxCount),
  withState('fetchInterval', 'setFetchInterval', props => props.fetchInterval),
  withState('accentColour', 'setAccentColour', props => props.accentColour),
  withState('readOnOpen', 'setReadOnOpen', props => props.readOnOpen),
  withHandlers({
    onToggleEdit: props => () => props.setIsEditable(!props.isEditable),
    onMaxCountChange: props => e => props.setMaxCount(parseInt(e.target.value, 16)),
    onToggleReadOnOpen: props => e => props.setReadOnOpen(e.target.checked),
    onAccentColourChange: props => e => props.setAccentColour(e.target.value),
    onFetchIntervalChange: props => e => props.setFetchInterval(parseInt(e.target.value, 16)),
    onSubmitForm: props => e => {
      e.preventDefault();
      var { maxCount, readOnOpen, fetchInterval, accentColour } = props;
      props.updateSettings({ maxCount, readOnOpen, fetchInterval, accentColour });
      props.setIsEditable(false);
    }
  })
);

const SettingsForm = props => (
  <div className="settings-form__form">
    <h2>General</h2>
    {props.isEditable ? (
      <form onSubmit={props.onSubmitForm}>
        <ul className="unstyled-list">
          <li>
            <label htmlFor="maxCount"><strong>Front Page items per feed</strong></label>
            <input type="number"
              id="maxCount"
              onChange={props.onMaxCountChange}
              value={props.maxCount} min={1}
              className="text-input" />
          </li>
          <li>
            <label htmlFor="readOnOpen"><strong>Read on open</strong></label>
            <input type="checkbox"
              id="readOnOpen"
              onChange={props.onToggleReadOnOpen}
              checked={props.readOnOpen} />
          </li>
          <li>
            <label htmlFor="fetchInterval"><strong>Fetch interval</strong></label>
            <input type="number"
              id="fetchInterval"
              onChange={props.onFetchIntervalChange}
              value={props.fetchInterval} min={1}
              className="text-input" /> minutes
          </li>
          <li>
            <label htmlFor="accentColour"><strong>Accent Colour</strong></label>
            <select id="accentColour" onChange={props.onAccentColourChange} value={props.accentColour}>
              {COLOURS.map(colour => (
                <option value={colour} key={colour}>{colour}</option>
              ))}
            </select>
          </li>
        </ul>
        <button className="button" type="submit">Update</button>
        <button className="button" type="button" onClick={props.onToggleEdit}>Close</button>
      </form>
    ) : (
      <ul onClick={props.onToggleEdit}
        className="unstyled-list">
        <li><strong>Front Page items per feed</strong>{props.maxCount}</li>
        <li><strong>Read on open</strong>{props.readOnOpen ? '✔' : '✘'}</li>
        <li><strong>Fetch interval</strong>{props.fetchInterval} minutes</li>
        <li><strong>Accent Colour</strong>{props.accentColour}</li>
      </ul>
    )}
  </div>
);

SettingsForm.propTypes = {
  isEditable: PropTypes.bool,
  onToggleEdit: PropTypes.func,
  onSubmitForm: PropTypes.func,
  onMaxCountChange: PropTypes.func,
  onToggleReadOnOpen: PropTypes.func,
  onFetchIntervalChange: PropTypes.func,
  onAccentColourChange: PropTypes.func,
  maxCount: PropTypes.number,
  readOnOpen: PropTypes.bool,
  fetchInterval: PropTypes.number,
  accentColour: PropTypes.oneOf(COLOURS)
};

export default enhance(SettingsForm);
