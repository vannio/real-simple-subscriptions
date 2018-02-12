import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';

import SettingsSubscriptions from './SettingsSubscriptions';

const enhance = compose(
  withState('isFormNewExpanded', 'setIsFormNewExpanded', false),
  withHandlers({
    onToggleFormNewExpanded: props => () =>
      props.setIsFormNewExpanded(!props.isFormNewExpanded),
  }),
);

export default enhance(SettingsSubscriptions);
