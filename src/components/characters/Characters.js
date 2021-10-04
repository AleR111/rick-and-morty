import { LinearProgress, Button, Pagination } from "@mui/material"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCharacters } from "../../store/api/thunks"
import { clearFilter } from "../../store/filters"
import { Character, Filters } from "./"
import styles from "./characters.module.scss"

export const Characters = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  const { filtersUrl } = useSelector(
    (state) => state.filtersStore,
    (prev, next) => prev.filtersUrl === next.filtersUrl,
  )
  const { data, isPending, error } = useSelector(
    (store) => store.charactersStore,
  )

  const getPage = (page = 1) => {
    if (filtersUrl) {
      if (data[page]) return
      dispatch(getCharacters(`${filtersUrl}page=${page}`, page))
    } else {
      if (data[page]) return
      dispatch(getCharacters(`page=${page}`, page))
    }
  }

  const newPage = (page) => {
    setPage(page)
    getPage(page)
    window.scrollTo({ top: 0 })
  }

  const reload = () => {
    dispatch(clearFilter())
    dispatch(getCharacters(`page=${1}`, 1))
  }

  useEffect(() => {
    dispatch(getCharacters(`page=${1}`, 1))
  }, [dispatch])

  if (isPending) {
    return (
      <div className={styles.progress}>
        <LinearProgress color={"secondary"} />
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h1>{error}</h1>
        <div>
          <Button variant="outlined" color="error" onClick={reload}>
            Reload
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.characters}>
      <Filters firstPage={() => setPage(1)} />
      <div className={styles.container}>
        {data[page]?.results?.map((el) => (
          <Character key={el.id} characterData={el} />
        ))}
      </div>
      {data[page]?.info?.pages && (
        <Pagination
          count={data[page].info?.pages}
          page={page}
          variant="outlined"
          shape="rounded"
          color="secondary"
          onChange={(e, page) => newPage(page)}
        />
      )}
    </div>
  )
}
