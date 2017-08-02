import React from 'react';
import PropTypes from 'prop-types';
import SubscriptionPreview from '../../components/SubscriptionPreview/SubscriptionPreview';
import { connect } from 'react-redux';

const enhance = connect(
  state => ({
    subscriptions: state.subscriptions
  })
);

const Show = ({ subscriptions, match }) => (
  <div>
    <h1>{subscriptions[match.params.id].title}</h1>
    <SubscriptionPreview id={match.params.id} />
  </div>
);

Show.propTypes = {
  subscriptions: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default enhance(Show);
