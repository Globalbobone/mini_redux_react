//import React, { Component } from 'react';

const createStore = (reducer, initialState) => {
  let currentReducer = reducer;
  let currentState = initialState;
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