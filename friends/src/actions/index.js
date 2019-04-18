import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
      // localStorage.setItem('token', res.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.payload
      })
    })
    .catch(err => dispatch({
      type: LOGIN_FAIL,
      payload: err
    }))
}

export const getData = () => dispatch => {
  // console.log('fetch')
  dispatch({ type: FETCH_DATA_START });
  return axios
    .get('http://localhost:5000/api/friends', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(res => {
      // console.log('in getData', res)
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      })
    }
    )
    .catch(err => dispatch({
      type: FETCH_DATA_FAIL,
      payload: err
    }))
}