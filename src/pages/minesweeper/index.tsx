import { Board } from '@minesweeper/components'
import styles from '@minesweeper/minesweeper.module.scss'
import { createMineArray } from '@src/utils/minesweeper'

const Minesweeper = () => {
  const temp = createMineArray({ clickIndex: 10, length: 100, mineCount: 10 })

  console.log(temp)
  return (
    <div className={styles.container}>
      <div>
        <div>123</div>
      </div>
      <Board />
    </div>
  )
}

export default Minesweeper
