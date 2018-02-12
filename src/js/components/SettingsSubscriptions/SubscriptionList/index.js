import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/subscriptions';
import { getSubscriptionKeys } from '../../../store/selectors/subscriptions';

import SubscriptionList from './SubscriptionList';

const enhance = compose(
  connect(
    state => ({
      subscriptions: state.subscriptions,
      subscriptionIds: getSubscriptionKeys(state),
    }),
    {
      updateSubscription: actions.updateSubscription,
      deleteSubscription: actions.deleteSubscription,
    },
  ),
  withState('editableId', 'setEditableId', ''),
  withHandlers({
    onToggleEdit: props => id => props.setEditableId(id),
    onDeleteSubscription: props => id => {
      props.setEditableId('');
      props.deleteSubscription(id);
    },
  }),
);

export default enhance(SubscriptionList);
