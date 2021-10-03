import { SET_FILTER, CLEAR_FILTER } from "./types"

const initialState = {
  filters: {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  },
}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          name: "",
          status: "",
          species: "",
          type: "",
          gender: "",
        },
      }
    default:
      return state
  }
}
