import { SET_FILTER } from "./types"

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  payload: { name, value },
})
