import { SET_FILTER } from "./types"

const initialState = {}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state
  }
}
