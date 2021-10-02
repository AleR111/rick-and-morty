import { Card, CardContent } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCharacters } from "../../store/api/thunks"
import styles from "./characters.module.scss"

export const Characters = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

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
      </div>
    </div>
  )
}
