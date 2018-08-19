import { FETCH_COLLEGES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COLLEGES:
      return [...action.payload];
    default:
      return state;
  }
}
