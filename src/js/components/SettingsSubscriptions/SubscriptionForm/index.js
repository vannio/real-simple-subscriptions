import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import {
  addSubscription,
  updateSubscription,
  deleteSubscription,
} from '../../../store/actions/subscriptions';
import SubscriptionForm from './SubscriptionForm';

const enhance = compose(
  connect(null, dispatch => ({
    addSubscription: subscription => dispatch(addSubscription(subscription)),
    updateSubscription: subscription =>
      dispatch(updateSubscription(subscription)),
    deleteSubscription: subscriptionId =>
      dispatch(deleteSubscription(subscriptionId)),
  })),
  withProps(props => ({
    isUpdating: !!props.subscription,
  })),
  withFormik({
    mapPropsToValues: props => ({
      title: props.subscription ? props.subscription.title : '',
      url: props.subscription ? props.subscription.url : '',
    }),
    handleSubmit: (values, { props, ...formikBag }) => {
      if (props.isUpdating) {
        props.updateSubscription({
          ...values,
          id: props.subscription.id,
        });
        props.setEditableId();
      } else {
        props.addSubscription(values);
        formikBag.resetForm();
      }
    },
  }),
  withHandlers({
    onDeleteSubscription: props => () => {
      props.deleteSubscription(props.subscription.id);
      props.setEditableId();
    },
    onCancelForm: props => () => {
      if (props.isUpdating) {
        props.setEditableId();
      } else {
        props.handleReset();
        props.setIsFormNewExpanded(false);
      }
    },
  }),
);

export default enhance(SubscriptionForm);
