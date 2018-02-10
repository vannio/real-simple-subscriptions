import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { saveSettings } from '../../store/actions';

import App from './App';

const enhance = compose(
  // connect(({ settings }) => ({ settings }), { saveSettings }),
  // lifecycle({
  //   componentDidMount() {
  //     const { settings, saveSettings } = this.props;
  //     saveSettings(settings);
  //   },
  // }),
);

export default enhance(App);
