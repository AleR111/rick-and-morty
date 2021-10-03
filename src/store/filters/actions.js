import { SET_FILTER, CLEAR_FILTER } from "./types"

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  payload: { name, value },
})

export const clearFilter = () => ({
  type: CLEAR_FILTER,
})
