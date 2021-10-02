import { LinearProgress, Button, Pagination } from "@mui/material"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCharacters } from "../../store/api/thunks"
import { Character, Filters } from "./"
import styles from "./characters.module.scss"

export const Characters = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const newPage = (page) => {
    setPage(page)
    dispatch(getCharacters(page))
  }

  const { data, isPending, error } = useSelector(
    (store) => store.charactersStore,
  )

  useEffect(() => {
    dispatch(getCharacters())
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
          <Button
            variant="outlined"
            color="error"
            onClick={() => dispatch(getCharacters())}
          >
            Reload
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.characters}>
      <Filters />
      <div className={styles.container}>
        {data?.results?.map((el) => (
          <Character key={el.id} characterData={el} />
        ))}
      </div>
      {data?.info?.pages && (
        <Pagination
          count={data.info?.pages}
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
