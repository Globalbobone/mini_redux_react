//import { combineReducers } from 'redux';
import combineReducers from '../utils/combine';
import CarsReducers from './car';
import ActiveCar from './car_active';

const allReducers = combineReducers({
  cars: CarsReducers,
  active: ActiveCar
});

export default allReducers;