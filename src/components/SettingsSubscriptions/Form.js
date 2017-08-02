import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

const enhance = compose(
  withState('title', 'setTitle', props => props.subscription ? props.subscription.title : ''),
  withState('url', 'setUrl', props => props.subscription ? props.subscription.url : ''),
  withHandlers({
    onTitleChange: props => e => props.setTitle(e.target.value),
    onUrlChange: props => e => props.setUrl(e.target.value),
    onSubmitForm: props => e => {
      e.preventDefault();
      var { title, url } = props;
      props.handleSubmit({ title: title, url: url });
      props.setTitle('');
      props.setUrl('');
    }
  })
);
export const Form = props => (
  <form className="settings-subscriptions__form" onSubmit={props.onSubmitForm}>
    <div>
      <label htmlFor="title">Title</label>
      <input type="text"
        id="title"
        onChange={props.onTitleChange}
        value={props.title} required />
    </div>
    <div>
      <label htmlFor="url">URL</label>
      <input type="url"
        id="url"
        onChange={props.onUrlChange}
        value={props.url} required />
    </div>
    <button type="submit">{props.cta || 'submit'}</button>
    {props.children}
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  onTitleChange: PropTypes.func,
  onUrlChange: PropTypes.func,
  title: PropTypes.string,
  url: PropTypes.string,
  cta: PropTypes.string,
  children: PropTypes.node
};

export default enhance(Form);
