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
        fetchingData: true,
        error: ''
      }

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.payload);
      return {
        ...state,
        fetchingData: false,
        error: ''
      }

    case LOGIN_FAIL:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      }

    case FETCH_DATA_START:
      return {
        ...state,
        fetchingData: true,
        error: ''
      }

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        friends: action.payload,
        error: ''
      }

    case FETCH_DATA_FAIL:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      }

    default:
      return state
  }
}