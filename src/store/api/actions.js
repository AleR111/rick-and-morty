import {
  LOADING_START,
  LOADING_SUCCESS,
  LOADING_ERROR,
  CLEAR_DATA,
} from "./types"

export const loadingStart = () => ({ type: LOADING_START })
export const loadingSuccess = (data, id) => ({
  type: LOADING_SUCCESS,
  payload: { data, id },
})
export const loadingError = (error) => ({ type: LOADING_ERROR, payload: error })

export const clearData = () => ({ type: CLEAR_DATA })
