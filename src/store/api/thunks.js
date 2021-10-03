import { loadingError, loadingStart, loadingSuccess } from "./actions"

const CHARACTER_URL = "https://rickandmortyapi.com/api/character"

const loadData = async (dispatch, url, id) => {
  dispatch(loadingStart())
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Characters don't found`)
    }

    const data = await response.json()
    dispatch(loadingSuccess(data, id))
  } catch (error) {
    dispatch(loadingError(error.message))
  }
}

export const getCharacters = (endPoint, id) => async (dispatch) => {
  const url = `${CHARACTER_URL}?${endPoint}`
  await loadData(dispatch, url, id)
}
