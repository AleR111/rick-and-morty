import {
  Card,
  CardContent,
  LinearProgress,
  Container,
  Button,
  Pagination,
} from "@mui/material"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCharacters } from "../../store/api/thunks"
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
      <div>
        <LinearProgress />
      </div>
    )
  }

  if (error) {
    return (
      <Container maxWidth="xl">
        <h1>{error}</h1>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(getCharacters())}
          >
            Reload
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <div className={styles.characters}>
      <div className={styles.container}>
        <div className={styles.box}>
          <Card
            sx={{ backgroundColor: "#3c3e44", color: "#fff" }}
            className={styles.card}
          >
            <img
              className={styles.media}
              src="https://rickandmortyapi.com/api/character/avatar/79.jpeg"
              alt="Live from space album cover"
            />
            <CardContent>
              <h4>Crab Spider</h4>
              <p>Alive - Alien</p>
              <h4>Crab Spider</h4>
              <p>Alive - Alien</p>
              <h4>Crab Spider</h4>
              <p>Close Rick-counters of the Rick Kind</p>
            </CardContent>
          </Card>
        </div>
        <div className={styles.box}>
          <Card
            sx={{ backgroundColor: "#3c3e44", color: "#fff" }}
            className={styles.card}
          >
            <img
              className={styles.media}
              src="https://rickandmortyapi.com/api/character/avatar/79.jpeg"
              alt="Live from space album cover"
            />
            <CardContent>
              <h4>Crab Spider</h4>
              <p>Alive - Alien</p>
              <h4>Crab Spider</h4>
              <p>Alive - Alien</p>
              <h4>Crab Spider</h4>
              <p>Close Rick-counters of the Rick Kind</p>
            </CardContent>
          </Card>
        </div>
        <div className={styles.box}>
          <Card
            sx={{ backgroundColor: "#3c3e44", color: "#fff" }}
            className={styles.card}
          >
            <img
              className={styles.media}
              src="https://rickandmortyapi.com/api/character/avatar/79.jpeg"
              alt="Live from space album cover"
            />
            <CardContent>
              <h4>Crab Spider</h4>
              <p>Alive - Alien</p>
              <h4>Crab Spider</h4>
              <p>Alive - Alien</p>
              <h4>Crab Spider</h4>
              <p>Close Rick-counters of the Rick Kind</p>
            </CardContent>
          </Card>
        </div>
      </div>
      {data.info?.pages && (
        <Pagination
          count={data.info?.pages}
          page={page}
          shape="rounded"
          onChange={(e, page) => newPage(page)}
        />
      )}
    </div>
  )
}
