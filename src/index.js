import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './js/reducers';
import './index.css';
import App from './js/routes/App/App';
import registerServiceWorker from './js/helpers/registerServiceWorker';

const configureStore = () => {
  const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  store.dispatch = store;
  return store;
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
