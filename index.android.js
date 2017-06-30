import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers/index.js';
import Ethereal from './app/components/Ethereal.js';
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enchancer = compose(
    applyMiddleware(
      loggerMiddleware
    )
  );
  return createStore(reducer, initialState, enchancer);
};

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <Ethereal/>
  </Provider>
)

AppRegistry.registerComponent('etherealNative', () => App)
