import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'reset-css/reset.css';
import './index.css';

import mapApp from './reducers';
import { operateCounter } from './reducers/actions/counter';
import MainContainer from './MainContainer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(mapApp);

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
