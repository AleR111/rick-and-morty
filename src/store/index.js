import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { charactersReducer } from "./api"
import { episodesReducer } from "./episodes"
import { filtersReducer } from "./filters"

export const reducers = combineReducers({
  charactersStore: charactersReducer,
  filtersStore: filtersReducer,
  episodesStore: episodesReducer,
})

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args,
  ),
)
