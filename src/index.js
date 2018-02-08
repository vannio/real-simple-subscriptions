import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducers from './reducers';
import App from './routes/App/App';
import registerServiceWorker from './utils/registerServiceWorker';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/fp/throttle';
import thunk from 'redux-thunk';
import registerChromeListeners from './utils/chrome';
import './styles/manifest.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    reducers,
    {
      ...loadState('config'),
      ...loadState('data')
    },
    composeEnhancers(
      applyMiddleware(thunk),
    )
  );
  store.subscribe(
    throttle(1000)(
      () => {
        saveState({
          settings: store.getState().settings,
          archived: store.getState().archived,
          subscriptions: store.getState().subscriptions,
        }, 'config');

        saveState({
          feedItems: store.getState().feedItems
        }, 'data');
      }
    )
  );
  return store;
};

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
registerChromeListeners();
