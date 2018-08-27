import React from 'react';
import { bindActionCreator } from './bindActionCreator';
import { withStore } from './withStore';

export default function connect(mapStateToProps = () => { }, mapDispatchToProps = {}) {
  return function (WrappedComponent) {
    class Connect extends React.Component {
      render() {
        const { store } = this.props;
        const stateToProps = mapStateToProps(store.getState(), this.props);
        const actionsToProps = Object.keys(mapDispatchToProps).reduce((a, name) => {
          return Object.assign({}, a, {
            [name]: bindActionCreator(mapDispatchToProps[name], store.dispatch)
          })
        }, {});
        return (
          <WrappedComponent
            {...stateToProps}
            {...actionsToProps}
          />
        )
      }
      componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(this.handleChange.bind(this))
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      handleChange() {
        this.forceUpdate()
      }
    }
    return withStore(Connect);
  }
}