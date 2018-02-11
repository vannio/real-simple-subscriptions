import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { saveConfig } from '../../store/actions/config';
import { getConfig } from '../../store/selectors/config';

import SettingsConfig from './SettingsConfig';

const enhance = compose(
  connect(
    state => ({
      config: getConfig(state),
    }),
    { saveConfig },
  ),
  withState('isEditable', 'setIsEditable', false),
  withFormik({
    mapPropsToValues: props => ({ ...props.config }),
    handleSubmit: (values, { props }) => {
      props.saveConfig(values);
      props.setIsEditable(false);
    },
  }),
  withHandlers({
    onToggleEdit: props => () => {
      props.isEditable && props.handleReset();
      props.setIsEditable(!props.isEditable);
    },
  }),
);

export default enhance(SettingsConfig);
