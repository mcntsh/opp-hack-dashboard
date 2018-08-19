import { FETCH_COLLEGES, FETCH_COLLEGE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COLLEGES:
      return [...action.payload];

    case FETCH_COLLEGE:
      return { ...action.payload };
    default:
      return state;
  }
}
