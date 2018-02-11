import React from 'react';
import PropTypes from 'prop-types';

export const SubscriptionForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="title">
        <strong>Title</strong>
      </label>
      <input
        type="text"
        id="title"
        onChange={props.handleChange}
        name="title"
        value={props.values.title}
        className="text-input"
        required
      />
    </div>
    <div>
      <label htmlFor="url">
        <strong>URL</strong>
      </label>
      <input
        type="url"
        id="url"
        onChange={props.handleChange}
        name="url"
        value={props.values.url}
        className="text-input"
        required
      />
    </div>
    {props.isUpdating ? (
      [
        <button type="submit" className="button" key={1}>
          Update
        </button>,
        <button
          type="button"
          className="button"
          key={2}
          onClick={props.onDeleteSubscription}>
          Delete
        </button>,
      ]
    ) : (
      <button type="submit" className="button">
        Submit
      </button>
    )}
    <button type="button" className="button" onClick={props.onCancelForm}>
      Close
    </button>
  </form>
);

SubscriptionForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onDeleteSubscription: PropTypes.func.isRequired,
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  cta: PropTypes.string,
  isUpdating: PropTypes.bool.isRequired,
};

export default SubscriptionForm;
