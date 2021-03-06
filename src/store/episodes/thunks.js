import { loadingError, loadingStart, loadingSuccess } from "./actions"

export const getEpisodes =
  (url, id) =>
  async (dispatch, _, { loadData }) => {
    await loadData(
      dispatch,
      { loadingError, loadingStart, loadingSuccess },
      url,
      id,
    )
  }
