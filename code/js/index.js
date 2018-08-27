import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './utils/Provider';
import createStore from './utils/store';
import allReducers from './reducers';
import { TestComponent } from './Test';
import WebPage from './components/WebPage';

const store = createStore(allReducers);

//<UserPage user={user} topPhotps={topPhotps}  />
// UserPage /// => axios.get => user => ... render
// TopPhotosComponent {props={user}} => axios....
// ListOfPhotosComponent {props={user}} => axios.get(/api/user/{user.id}/photos/)

ReactDOM.render(
  <Provider store={(store)}>
    <TestComponent />
    {/*<WebPage/>*/}
  </Provider>,
  document.getElementById('fieldToShow')
);