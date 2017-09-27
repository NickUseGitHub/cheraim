import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'reset-css/reset.css';
import './index.css';

import app from 'firebase/app';
import 'firebase/database';
import { firebase as firebaseConf } from './_conf/config';

import mapApp from './reducers';
import MainContainer from './MainContainer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(mapApp);
const firebase = app.initializeApp(firebaseConf);

console.log('version 1.0');

ReactDOM.render(
  <Provider store={store}>
    <MainContainer firebase={firebase} />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
