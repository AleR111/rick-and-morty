import { Character } from "./"
import styles from "./characters.module.scss"

export const Characters = ({ data }) => {
  return (
    <div className={styles.container}>
      {data?.map((el) => (
        <Character key={el.id} characterData={el} />
      ))}
    </div>
  )
}
