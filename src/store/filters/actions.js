import { SET_FILTER, CLEAR_FILTER, SET_FILTER_URL } from "./types"

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  payload: { name, value },
})

export const clearFilter = () => ({
  type: CLEAR_FILTER,
})

export const setFilterUrl = (url) => ({
  type: SET_FILTER_URL,
  payload: url,
})
