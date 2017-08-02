import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import './index.css';
import App from './routes/App/App';
import registerServiceWorker from './helpers/registerServiceWorker';
import { loadState, saveState } from './helpers/localStorage';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';

const configureStore = () => {
  const store = createStore(
    reducers,
    loadState(),
    applyMiddleware(thunk),
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
