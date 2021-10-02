import { Card, CardContent } from "@mui/material"
import styles from "./character.module.scss"

export const Character = ({ characterData }) => {
  return (
    <div className={styles.box}>
      <Card
        sx={{ backgroundColor: "#3c3e44", color: "#fff" }}
        className={styles.card}
      >
        <img
          className={styles.media}
          src={characterData.image}
          alt={characterData.name}
        />
        <CardContent className={styles.propsBox}>
          <div>
            <h2 className={styles.name}>{characterData.name}</h2>
            <p>
              {characterData.status} - {characterData.species}
            </p>
          </div>
          <div>
            <h4 className={styles.prop}>Gender:</h4>
            <p>{characterData.gender}</p>
          </div>
          <div>
            <h4 className={styles.prop}>Last known location:</h4>
            <p>{characterData.location.name}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
