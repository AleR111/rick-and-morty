import { Backdrop, Box, Card, CardContent, Fade, Modal } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getEpisodes } from "../../../../store/episodes/thunks"
import styles from "../character.module.scss"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  outline: "unset",
}
export const Popup = ({ open, handleClose, characterData }) => {
  const dispatch = useDispatch()
  const isHave = useSelector(
    (store) => store.episodesStore.data[characterData.id],
  )

  useEffect(() => {
    if (isHave) return
    dispatch(
      getEpisodes(
        characterData.episode[characterData.episode.length - 1],
        characterData.id,
      ),
    )
  }, [dispatch, characterData.episode, characterData.id, isHave])

  return (
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
        <Box sx={style}>
          <Card
            sx={{ backgroundColor: "#3c3e44", color: "#fff" }}
            className={styles.cardModal}
          >
            <img
              className={styles.mediaModal}
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
        </Box>
      </Fade>
    </Modal>
  )
}
