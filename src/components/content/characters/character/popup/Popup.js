import {
  Backdrop,
  Box,
  Card,
  CardContent,
  Fade,
  Modal,
  CircularProgress,
} from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getEpisodes } from "../../../../../store/episodes/thunks"
import styles from "../character.module.scss"
import stylesPopup from "./popup.module.scss"

export const Popup = ({ open, handleClose, characterData }) => {
  const dispatch = useDispatch()

  const { data, isPending, error } =
    useSelector(
      (store) => store.episodesStore,
      (prev, next) =>
        prev.data[characterData.id] === next.data[characterData.id],
    ) || ""

  const firstEpisode = data[characterData.id] || ""
  useEffect(() => {
    if (firstEpisode) return
    dispatch(getEpisodes(characterData.episode[[0]], characterData.id))
  }, [dispatch, characterData.episode, characterData.id, firstEpisode])

  const loading = () => {
    if (isPending) {
      return <CircularProgress color="secondary" />
    } else if (error) {
      return <h1>{error}</h1>
    } else {
      return (
        <Card
          sx={{ backgroundColor: "#3c3e44", color: "#fff" }}
          className={styles.cardModal}
        >
          <img
            className={styles.mediaModal}
            src={characterData.image}
            alt={characterData.name}
          />
          <CardContent className={stylesPopup.propsBox}>
            <div className={styles.propPop}>
              <h2 className={styles.name}>{characterData.name}</h2>
              <p>
                {characterData.status} - {characterData.species},
                gender&nbsp;-&nbsp;{characterData.gender}
              </p>
            </div>
            <div className={styles.propPop}>
              <h4 className={styles.prop}>Origin:</h4>
              <p>{characterData.origin.name}</p>
            </div>
            <div className={styles.propPop}>
              <h4 className={styles.prop}>Last known location:</h4>
              <p>{characterData.location.name}</p>
            </div>
            <div className={styles.propPop}>
              <h4 className={styles.prop}>Number of episodes:</h4>
              <p>{characterData.episode.length}</p>
            </div>
            <div className={styles.propPop}>
              <h4 className={styles.prop}>First seen in:</h4>
              <p>
                {firstEpisode.air_date} <br />№{firstEpisode.episode} -{" "}
                {firstEpisode.name}
              </p>
            </div>
          </CardContent>
        </Card>
      )
    }
  }

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
        <Box className={stylesPopup.box}>{loading()}</Box>
      </Fade>
    </Modal>
  )
}
