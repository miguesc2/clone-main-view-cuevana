import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styless/Index.scss';
//import store from './store'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from './initialState'

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);