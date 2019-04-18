import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from '../actions';

const initialState = {
  friends: [],
  fetchingData: false,
  error: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        fetchingData: true
      }

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        fetchingData: false
      }

    case LOGIN_FAIL:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      }

    default:
      return state
  }
}