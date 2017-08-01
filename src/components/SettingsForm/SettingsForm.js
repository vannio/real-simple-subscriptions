import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const colours = ['Pink', 'Purple', 'Blue', 'Green', 'Yellow', 'Orange', 'Red', 'Black', 'White'];

const enhance = compose(
  connect(
    state => ({
      maxCount: state.settings.maxCount,
      readOnOpen: state.settings.readOnOpen,
      accentColour: state.settings.accentColour,
    }),
    { updateSettings: actions.updateSettings }
  ),
  withState('isEditable', 'setIsEditable', false),
  withState('maxCount', 'setMaxCount', props => props.maxCount),
  withState('accentColour', 'setAccentColour', props => props.accentColour),
  withState('readOnOpen', 'setReadOnOpen', props => props.readOnOpen),
  withHandlers({
    onToggleEdit: props => () => props.setIsEditable(!props.isEditable),
    onMaxCountChange: props => e => props.setMaxCount(parseInt(e.target.value, 16)),
    onToggleReadOnOpen: props => e => props.setReadOnOpen(e.target.checked),
    onAccentColourChange: props => e => props.setAccentColour(e.target.value),
    onSubmitForm: props => e => {
      e.preventDefault();
      var { maxCount, readOnOpen, accentColour } = props;
      props.updateSettings({ maxCount, readOnOpen, accentColour });
      props.setIsEditable(false);
    }
  })
);

const SettingsForm = props => (
  <div className="settings-form__form">
    <h3>General</h3>
    {props.isEditable ? (
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label htmlFor="maxCount">Front Page items per feed</label>
          <input type="number" id="maxCount" onChange={props.onMaxCountChange} value={props.maxCount} />
        </div>
        <div>
          <label htmlFor="readOnOpen">Read on open</label>
          <input type="checkbox" id="readOnOpen" onChange={props.onToggleReadOnOpen} checked={props.readOnOpen} />
        </div>
        <div>
          <label htmlFor="accentColour">Accent Colour</label>
          <select id="accentColour" onChange={props.onAccentColourChange} value={props.accentColour}>
            {colours.map(colour => (
              <option value={colour} key={colour}>{colour}</option>
            ))}
          </select>
        </div>
        <button className="settings-form__button" type="submit">update</button>
        <button className="settings-form__button" type="button" onClick={props.onToggleEdit}>close</button>
      </form>
    ) : (
      <ul
        onClick={props.onToggleEdit}
        className="settings-form__list">
        <li><strong>Front Page items per feed</strong>{props.maxCount}</li>
        <li><strong>Read on open</strong>{props.readOnOpen ? '✔' : '✘'}</li>
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
  onAccentColourChange: PropTypes.func,
  maxCount: PropTypes.number,
  readOnOpen: PropTypes.bool,
  accentColour: PropTypes.oneOf(colours)
};

export default enhance(SettingsForm);
