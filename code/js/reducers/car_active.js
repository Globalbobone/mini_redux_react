export default function (state = [], action) {
  switch (action.type) {
    case 'CAR_SELECTED':
      return action.payload;
      break;
    case 'CAR_REMOVE':
      console.log('Remove', action.payload, state);
      console.log(state.filter((_, index) => index !== action.payload));
      return state.filter((_, index) => index !== action.payload);
      break;
    default:
      return state;
  }
}