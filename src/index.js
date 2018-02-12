import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './js/store/reducers';
import App from './js/components/App';
import registerServiceWorker from './js/utils/registerServiceWorker';
import { loadState, saveState } from './js/utils/localStorage';
import throttle from 'lodash/fp/throttle';
import thunk from 'redux-thunk';
import registerChromeListeners from './js/utils/chrome';
import './styles/manifest.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const initialState = {
    config: loadState('config'),
    subscriptions: loadState('subscriptions'),
  };

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  store.subscribe(
    throttle(1000)(() => {
      saveState(store.getState().config, 'config');
      saveState(store.getState().subscriptions, 'subscriptions');
    }),
  );

  return store;
};

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
registerChromeListeners();
