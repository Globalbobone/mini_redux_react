import React from 'react';
import { StoreContext } from './StoreContext';

export class Provider extends React.Component {
    render() {
        return (
            <StoreContext.Provider value={this.props.store}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}