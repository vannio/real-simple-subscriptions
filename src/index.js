import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './js/reducers';
import './index.css';
import App from './js/routes/App/App';
import registerServiceWorker from './js/helpers/registerServiceWorker';
import { loadState, saveState } from './js/helpers/localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const store = createStore(
    reducers,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.subscribe(
    throttle(
      () => {
        saveState({
          settings: store.getState().settings,
          archived: store.getState().archived,
          subscriptions: store.getState().subscriptions
        });
      },
      1000
    )
  );
  return store;
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
