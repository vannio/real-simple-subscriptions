import React from 'react';
import PropTypes from 'prop-types';
import { COLOUR_MAP, SHOW_CONTENT_MAP } from '../../../config';

import './SettingsConfig.css';

const SettingsConfig = props => (
  <div className="settings-config">
    {props.isEditable ? (
      <form onSubmit={props.handleSubmit}>
        <ul className="unstyled-list">
          <li>
            <label htmlFor="maxCount">
              <strong>Maximum items to display</strong>
            </label>
            <input
              type="number"
              id="maxCount"
              onChange={props.handleChange}
              name="maxCount"
              value={props.values.maxCount}
              min={1}
              className="text-input"
            />
          </li>
          <li>
            <label htmlFor="fetchInterval">
              <strong>Background fetch interval (minutes)</strong>
            </label>
            <input
              type="number"
              id="fetchInterval"
              onChange={props.handleChange}
              name="fetchInterval"
              value={props.values.fetchInterval}
              min={1}
              className="text-input"
            />
          </li>
          <li>
            <label htmlFor="accentColour">
              <strong>Accent Colour</strong>
            </label>
            <select
              id="accentColour"
              onChange={props.handleChange}
              name="accentColour"
              value={props.values.accentColour}>
              {COLOUR_MAP.map(colour => (
                <option value={colour} key={colour}>
                  {colour}
                </option>
              ))}
            </select>
          </li>
          <li>
            <label htmlFor="readOnOpen">
              <strong>Mark as read after viewing</strong>
            </label>
            <input
              type="checkbox"
              id="readOnOpen"
              onChange={props.handleChange}
              name="readOnOpen"
              checked={props.values.readOnOpen}
            />
          </li>
          <li>
            <label htmlFor="hideRead">
              <strong>Remove from list when viewed</strong>
            </label>
            <input
              type="checkbox"
              id="hideRead"
              onChange={props.handleChange}
              name="hideRead"
              checked={props.values.hideRead}
            />
          </li>
          <li>
            <strong>Articles display:</strong>
            <ul>
              <li>
                <label htmlFor="showSummary">
                  <strong>Summary</strong>
                </label>
                <input
                  type="checkbox"
                  id="showSummary"
                  onChange={props.handleChange}
                  name="showSummary"
                  checked={props.values.showSummary}
                />
              </li>
              <li>
                <label htmlFor="showContent">
                  <strong>Content</strong>
                </label>
                <select
                  id="showContent"
                  onChange={props.handleChange}
                  name="showContent"
                  value={props.values.showContent}>
                  {Object.keys(SHOW_CONTENT_MAP).map(key => (
                    <option key={key} value={key}>
                      {SHOW_CONTENT_MAP[key]}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <label htmlFor="showImages">
                  <strong>Images</strong>
                </label>
                <input
                  type="checkbox"
                  id="showImages"
                  onChange={props.handleChange}
                  name="showImages"
                  checked={props.values.showImages}
                />
              </li>
            </ul>
          </li>
        </ul>
        <button className="button" type="submit">
          Update
        </button>
        <button className="button" type="button" onClick={props.onToggleEdit}>
          Close
        </button>
      </form>
    ) : (
      <ul onClick={props.onToggleEdit} className="unstyled-list">
        <li>
          <strong>Maximum items to display</strong>
          {props.values.maxCount}
        </li>
        <li>
          <strong>Background fetch interval</strong>
          {props.values.fetchInterval} minutes
        </li>
        <li>
          <strong>Accent Colour</strong>
          {props.values.accentColour}
        </li>
        <li>
          <strong>Mark as read after viewing</strong>
          {props.values.readOnOpen ? '✔' : '✘'}
        </li>
        <li>
          <strong>Remove from list when viewed</strong>
          {props.values.hideRead ? '✔' : '✘'}
        </li>
        <li>
          <strong>Articles display:</strong>
          <ul>
            <li>
              <strong>Summary</strong>
              {props.values.showSummary ? '✔' : '✘'}
            </li>
            <li>
              <strong>Content</strong>
              {SHOW_CONTENT_MAP[props.values.showContent]}
            </li>
            <li>
              <strong>Images</strong>
              {props.values.showImages ? '✔' : '✘'}
            </li>
          </ul>
        </li>
      </ul>
    )}
  </div>
);

SettingsConfig.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    maxCount: PropTypes.number.isRequired,
    fetchInterval: PropTypes.number.isRequired,
    accentColour: PropTypes.oneOf(COLOUR_MAP).isRequired,
    readOnOpen: PropTypes.bool.isRequired,
    hideRead: PropTypes.bool.isRequired,
    showSummary: PropTypes.bool.isRequired,
    showContent: PropTypes.string.isRequired,
    showImages: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SettingsConfig;
