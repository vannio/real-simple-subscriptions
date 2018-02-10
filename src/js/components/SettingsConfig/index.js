import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import { saveConfig } from '../../store/actions/config';
import pick from 'lodash/fp/pick';
import { getConfig } from '../../store/selectors/config';

import SettingsConfig from './SettingsConfig';

const enhance = compose(
  connect(
    state => {
      const config = getConfig(state);
      return {
        ...config,
        settingsFields: Object.keys(config),
      };
    },
    { saveConfig },
  ),
  withState('isEditable', 'setIsEditable', false),
  withState('maxCount', 'setMaxCount', props => props.maxCount),
  withState('fetchInterval', 'setFetchInterval', props => props.fetchInterval),
  withState('accentColour', 'setAccentColour', props => props.accentColour),
  withState('readOnOpen', 'setReadOnOpen', props => props.readOnOpen),
  withState('hideRead', 'setHideRead', props => props.hideRead),
  withState('showSummary', 'setShowSummary', props => props.showSummary),
  withState('showContent', 'setShowContent', props => props.showContent),
  withState('showImages', 'setShowImages', props => props.showImages),
  withHandlers({
    onToggleEdit: props => () => props.setIsEditable(!props.isEditable),
    onMaxCountChange: props => e =>
      props.setMaxCount(parseInt(e.target.value, 10)),
    onFetchIntervalChange: props => e =>
      props.setFetchInterval(parseInt(e.target.value, 10)),
    onAccentColourChange: props => e => props.setAccentColour(e.target.value),
    onToggleReadOnOpen: props => e => props.setReadOnOpen(e.target.checked),
    onToggleHideRead: props => e => props.setHideRead(e.target.checked),
    onToggleShowSummary: props => e => props.setShowSummary(e.target.checked),
    onShowContentChange: props => e => props.setShowContent(e.target.value),
    onToggleShowImages: props => e => props.setShowImages(e.target.checked),
    onSubmitForm: props => e => {
      e.preventDefault();
      const config = pick(props.settingsFields)(props);
      props.saveConfig(config);
      props.setIsEditable(false);
    },
  }),
);

export default enhance(SettingsConfig);
