import {
  LOADING_START,
  LOADING_SUCCESS,
  LOADING_ERROR,
  CLEAR_DATA,
} from "./types"

const initialState = {
  data: {},
  isPending: false,
  error: "",
}

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isPending: true,
      }
    case LOADING_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: {
          ...state.data,
          [action.payload.id]: action.payload.data,
        },
        error: false,
      }
    case LOADING_ERROR:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      }
    case CLEAR_DATA:
      return {
        ...state,
        data: {},
      }
    default:
      return state
  }
}
