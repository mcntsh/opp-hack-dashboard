import { FETCH_COLLEGES } from '../actions';

export default function(state, action) {
    switch (action.type) {
        case FETCH_COLLEGES:
            return { ...action.payload };
        default:
            return { ...state };
    }
}
