import { Board } from '@minesweeper/components'
import styles from '@minesweeper/minesweeper.module.scss'

const Minesweeper = () => {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  )
}

export default Minesweeper
