import { Card, CardContent } from "@mui/material"
import { useState } from "react"
import styles from "./character.module.scss"
import { Popup } from "./popup"

export const Character = ({ characterData }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    console.log(1124324324)
  }
  const handleClose = () => setOpen(false)

  return (
    <>
      <div className={styles.box} onClick={handleOpen}>
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
              <h4 className={styles.prop}>Number of episodes:</h4>
              <p>{characterData.episode.length}</p>
            </div>
            <div>
              <h4 className={styles.prop}>Last known location:</h4>
              <p>{characterData.location.name}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Popup
        open={open}
        handleClose={handleClose}
        characterData={characterData}
      />
    </>
  )
}
