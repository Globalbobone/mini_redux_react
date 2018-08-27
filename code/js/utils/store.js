//import React, { Component } from 'react';

const createStore = (reducer, initialState = {}) => {

  let currentReducer = reducer;
  let currentState = Object.assign({}, initialState, reducer(initialState, { type: '@@INIT' }));
  let listener = () => { };

  return {
    dispatch(action) {
      currentState = currentReducer(currentState, action);
      listener();
      return action;
    },
    subscribe(newListener) {
      listener = newListener;
    },
    getState() {
      return currentState;
    }
  };
};

export default createStore;