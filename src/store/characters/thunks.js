import { loadingError, loadingStart, loadingSuccess } from "./actions"

const CHARACTER_URL = "https://rickandmortyapi.com/api/character"

export const getCharacters =
  (endPoint, id) =>
  async (dispatch, _, { loadData }) => {
    const url = `${CHARACTER_URL}?${endPoint}`
    await loadData(
      dispatch,
      { loadingError, loadingStart, loadingSuccess },
      url,
      id,
    )
  }
