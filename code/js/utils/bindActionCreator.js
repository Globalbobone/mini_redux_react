export default function bindActionCreators(actionCreators, dispatch) {
  //if (typeof actionCreators === 'function') {
  // return function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  }
  //}
  // }
}

export function bindActionCreator(actionCreator, dispatch) {
  return function () {
    const action = typeof actionCreator === 'function' ? actionCreator(...arguments) : actionCreator;
    return dispatch(action);
  }
}

