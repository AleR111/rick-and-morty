import { Card, CardContent, Modal, Backdrop, Fade, Box } from "@mui/material"
import { useState } from "react"
import styles from "./character.module.scss"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

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
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition={true}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>Text in a modal</Box>
          </Fade>
        </Modal>
      </div>
    </>
  )
}
