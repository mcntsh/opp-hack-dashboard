import axios from 'axios';
import { gql } from 'graphql-tag';
import { FETCH_COLLEGE, FETCH_COLLEGES } from './types';

export const submitCollege = (values, history) => async dispatch => {
  const res = await axios.post('', values);

  history.push('/colleges');
  return dispatch({ type: FETCH_COLLEGE, payload: res.data });
};

export const fetchColleges = () => async dispatch => {
  return dispatch({
    type: FETCH_COLLEGES,
    payload: [
      { name: 'Georgia College', type: 'HIGH_SCHOOL' },
      { name: 'San Joes', type: 'MIDDLE_SCHOOL' }
    ]
  });
};

export const fetchCollege = () => async dispatch => {
  //  const req = axios.post('https://f-connect.herokuapp.com/graphql', {
  //      query: gql`
  //          {
  //
  //          }
  //      `
  //  })

  return dispatch({ type: FETCH_COLLEGE });
};
