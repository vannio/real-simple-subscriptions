import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { getConfig } from '../../store/selectors/config';
import { saveConfig } from '../../store/actions/config';

import App from './App';

const enhance = compose(
  connect(
    state => ({
      config: getConfig(state),
    }),
    { saveConfig },
  ),
  lifecycle({
    componentDidMount() {
      const { config, saveConfig } = this.props;
      saveConfig(config);
    },
  }),
);

export default enhance(App);
