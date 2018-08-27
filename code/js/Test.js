import React from 'react';
import connect from './utils/connect';
//import bindActionCreators from './utils/bindActionCreator';
//import { select } from '../js/actions/index';

class _TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.renderCars = this.renderCars.bind(this);
    }
    renderCars() {
        return this.props.cars.map(({ id, name, img }, index) => (
            <div key={id} onClick={() => this.props.remove(index)}>
                <h1>{name}</h1>
                <img src={img} alt={name} />
            </div>
        ))
    }
    
    render() {
        return (
            <div>
                {JSON.stringify(this.props)}
                {this.renderCars()}
            </div>
        )
    }
}

const mapStateToPropes = (state) => ({
    cars: state.cars
})

function remove(index) {
    return ({ type: 'CAR_REMOVE', payload: index });
}
let mapDispatchToProps = { remove };

export const TestComponent = connect(mapStateToPropes, mapDispatchToProps)(_TestComponent);