import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  // compose
} from 'redux';
import reducers from './reducers';
import './index.css';
import App from './routes/App/App';
import registerServiceWorker from './helpers/registerServiceWorker';
import { loadState, saveState } from './helpers/localStorage';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import registerChromeListeners from './helpers/chrome';

const configureStore = () => {
  const store = createStore(
    reducers,
    {
      ...loadState(),
      ...loadState('cachedData')
    },
    // compose(
    //   applyMiddleware(thunk),
    //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
    applyMiddleware(thunk)
  );
  store.subscribe(
    throttle(
      () => {
        saveState({
          settings: store.getState().settings,
          archived: store.getState().archived,
          subscriptions: store.getState().subscriptions,
        });

        saveState({
          feedItems: store.getState().feedItems
        }, 'cachedData');
      },
      1000
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
