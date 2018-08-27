import React, { Component } from 'react';
import { StoreContext } from './StoreContext';

export const withStore = (Component) => {
    return class withStore extends React.Component {
        render() {
            return (
                <StoreContext.Consumer>
                    {(store) => <Component store={store} />}
                </StoreContext.Consumer>
            )
        }
    }
}  
