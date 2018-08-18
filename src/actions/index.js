import axios from 'axios';

export const FETCH_COLLEGE = 'FETCH_COLLEGE';
export const FETCH_COLLEGES = 'FETCH_COLLEGES';

export const submitCollege = (values, history) => async dispatch => {
  const res = await axios.post('', values);

  history.push('/colleges');
  return dispatch({ type: FETCH_COLLEGE, payload: res.data });
};

export const fetchColleges = () => async dispatch => {
  const res = await axios.get('');

  return dispatch({ type: FETCH_COLLEGES, payload: res.data });
};
