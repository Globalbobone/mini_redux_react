import React from 'react';
import CarsList from '../containers/cars_list';
import Details from '../containers/details';

const WebPage = () => (
  <div>
    <h3>Cars:</h3>
    <CarsList />
    <hr />
    <h4>Details:</h4>
    <Details />
  </div>
);

export default WebPage;