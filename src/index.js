import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import initialState from './initialState'
import reducer from './reducers/'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/styless/Index.scss';

const store = createStore(reducer, initialState)
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('app')
)