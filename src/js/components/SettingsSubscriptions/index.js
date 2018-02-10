import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import SettingsSubscriptions from './SettingsSubscriptions';

const enhance = compose(
  connect(null, { addSubscription: actions.addSubscription }),
  withState('isFormNewExpanded', 'setIsFormNewExpanded', false),
  withHandlers({
    onToggleFormNewExpanded: props => () =>
      props.setIsFormNewExpanded(!props.isFormNewExpanded),
    onFeedTitleChange: props => e => props.setFeedTitle(e.target.value),
    onFeedUrlChange: props => e => props.setFeedUrl(e.target.value),
    onAddSubscription: props => subscription => {
      props.addSubscription(subscription);
      props.setIsFormNewExpanded(false);
    },
    onUpdateSubscription: props => subscription =>
      props.updateSubscription(subscription),
  }),
);

export default enhance(SettingsSubscriptions);
