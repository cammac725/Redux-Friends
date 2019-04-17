import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
  friends: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
      }

    case FETCH_SUCCESS:
      return {
        ...state,
      }

    case FETCH_FAILURE:
      return {
        ...state,
      }

    default:
      return state
  }
}