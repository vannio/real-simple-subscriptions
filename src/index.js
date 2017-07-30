import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/routes/App/App';
import registerServiceWorker from './js/helpers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
