export const loadData = async (dispatch, action, url, id) => {
  dispatch(action.loadingError())
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Characters don't found`)
    }

    const data = await response.json()
    dispatch(action.loadingSuccess(data, id))
  } catch (error) {
    dispatch(action.loadingError(error.message))
  }
}
