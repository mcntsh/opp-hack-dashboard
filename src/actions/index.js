import axios from 'axios';

import { FETCH_COLLEGE, FETCH_COLLEGES } from './types';

export const submitCollege = (values, history) => async dispatch => {
  const res = await axios.post('', values);

  history.push('/colleges');
  return dispatch({ type: FETCH_COLLEGE, payload: res.data });
};

export const fetchColleges = () => async dispatch => {
  const res = await axios.post('https://f-connect.herokuapp.com/graphql', {
    query: `
      query {

schools(limit: 100) {
        name,
        type
      }
      }
            `
  });

  return dispatch({
    type: FETCH_COLLEGES,
    payload: [...res.data.data.schools]
  });
};
