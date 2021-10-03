import { LOADING_START, LOADING_SUCCESS, LOADING_ERROR } from "./types"

const initialState = {
  data: {},
  isPending: false,
  error: "",
}

export const episodesReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}
