import axios from 'axios';
import { FETCH_COLLEGE, FETCH_COLLEGES } from './types';

export const submitCollege = (values, history) => async dispatch => {
  const res = await axios.post('', values);

  history.push('/colleges');
  return dispatch({ type: FETCH_COLLEGE, payload: res.data });
};

export const fetchColleges = () => async dispatch => {
    return dispatch({ type: FETCH_COLLEGES, payload: [
        { name: 'Georgia College', uuid: '1sa30sf98d' },
        { name: 'San Joes', uuid: 'a1u7167ui7' },
    ] });
};

export const fetchCollege = () => async dispatch => {
    return dispatch({ type: FETCH_COLLEGE })
};


