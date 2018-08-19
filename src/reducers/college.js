import { FETCH_COLLEGES } from '../actions';

export default function(state, action) {
<<<<<<< Updated upstream
  switch (action.type) {
    case FETCH_COLLEGES:
      return { ...action.payload };
    default:
      return { ...state };
  }
=======
    switch (action.type) {
        case FETCH_COLLEGES:
            return { ...action.payload };
        default:
            return [];
    }
>>>>>>> Stashed changes
}
