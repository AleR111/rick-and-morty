import { SET_FILTER, CLEAR_FILTER, SET_FILTER_URL } from "./types"

const initialState = {
  filters: {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  },
  filtersUrl: "",
}

const clear = (prevObj) => {
  const newObj = { ...prevObj }
  for (const key in newObj) {
    if (!newObj[key]) continue
    newObj[key] = ""
  }
  return newObj
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
        filters: clear(state.filters),
        filtersUrl: "",
      }
    case SET_FILTER_URL:
      return {
        ...state,
        filtersUrl: action.payload,
      }
    default:
      return state
  }
}
