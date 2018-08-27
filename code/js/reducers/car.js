const initialState = [
  {
    id: 1,
    name: 'Audi',
    speed: 240,
    weigh: 1.5,
    desc: 'R8 - очень крутой авто',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0eySNEJdLU1sIOqoIfbwF7WQWhPQn302cE6DIdL4z-K0d9UWvg'
  },
  {
    id: 2,
    name: 'BMW',
    speed: 260,
    weigh: 1.6,
    desc: 'BMW - крутой авто',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUOQzVCrAtH7fUJM0ctc_5hH_XZuUQ_j1FQbE-4HARv_sBC-9_g'
  },
  {
    id: 3,
    name: 'RENO',
    speed: 140,
    weigh: 1.4,
    desc: 'Reno - не самый крутой авто',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdcPDiEv3zv96fw2m1uBskBATVl20Lv9N-6CZ3e3A9BdhtQeF'
  }
]

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CAR_SELECTED':
      return action.payload;
      break;
    case 'CAR_REMOVE':
      return state.filter((_, index) => index !== action.payload);
      break;
    default:
      return state;
  }
}