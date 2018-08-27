import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import bindActionCreators from '../utils/bindActionCreator';
//import { connect } from 'react-redux';
import { select } from '../actions/index';
import connect from '../utils/connect';
//import PropTypes from 'prop-types';
//import {createStore} from 'redux';
import createStore from '../utils/store';
import allReducers from '../reducers';


const store = createStore(allReducers);



class CarsList extends Component {
  constructor(props) {
    super(props);
    this.showlist = this.showlist.bind(this);
  }

  showlist() {
    //console.log (store.getState());
    //console.log (this.props);
    return store.getState().cars.map((car) => {
      return (
        <li onClick={() => this.props.select(car)}
          key={car.id}><a href="#">{car.name}</a></li>
      );
    });
  }
  render() {
    return (
      <ol>
        {this.showlist()}
      </ol>
    );
  };
};

let mapStateToProps = (store) => {
  return {
    cars: store.cars
  }
};


//let mapDispatchToProps = { select: select };

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ select: select }, dispatch);
};


/*
CarsList.defaultProps = {
  cars: ' ',
}; 

CarsList.propTypes = {
  cars: React.PropTypes.string.isRequired
} 
*/
export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
