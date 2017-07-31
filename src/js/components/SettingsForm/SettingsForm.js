import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

const enhance = compose(
  withState('isEditable', 'setIsEditable', false),
  withHandlers({
    onToggleEdit: props => () => props.setIsEditable(!props.isEditable)
  })
);

const SettingsForm = props => (
  <div className="settings-form__form">
    <h2>Settings</h2>
    <h3>General</h3>
    {props.isEditable &&
      <form>
        <div>
          <label htmlFor="maxCount">Front Page items per feed</label>
          <input type="number" id="maxCount" />
        </div>
        <div>
          <label htmlFor="readOnOpen">Read on open</label>
          <input type="checkbox" id="readOnOpen" />
        </div>
        <button className="settings-form__button">update</button>
        <button className="settings-form__button">close</button>
      </form>
    }
    {!props.isEditable &&
      <ul
        onClick={props.onToggleEdit}
        className="settings-form__list">
        <li><strong>Front Page items per feed</strong>0</li>
        <li><strong>Read on open</strong>✔ / ✘</li>
        <li><strong>Accent Color</strong>Pink</li>
      </ul>
    }
  </div>
);

SettingsForm.propTypes = {
  isEditable: PropTypes.bool,
  onToggleEdit: PropTypes.func
};

export default enhance(SettingsForm);
