import { SET_FILTER, CLEAR_FILTER } from "./types"

const initialState = {}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case CLEAR_FILTER:
      return {}
    default:
      return state
  }
}
