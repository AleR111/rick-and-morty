import { loadingError, loadingStart, loadingSuccess } from "./actions"

const CHARACTER_URL = "https://rickandmortyapi.com/api/character"

const loadData = async (dispatch, url) => {
  dispatch(loadingStart())
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    dispatch(loadingSuccess(data))
  } catch (error) {
    dispatch(loadingError(error.message))
  }
}

export const getCharacters =
  (page = 1) =>
  async (dispatch) => {
    const url = `${CHARACTER_URL}?page=${page}`
    await loadData(dispatch, url)
  }
