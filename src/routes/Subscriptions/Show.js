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
  <SubscriptionPreview id={match.params.id} />
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
