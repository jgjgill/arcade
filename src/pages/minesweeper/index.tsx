import { Board } from '@minesweeper/components'
import { useBoard, useGameStats, usePlayer } from '@minesweeper/hooks'
import styles from '@minesweeper/minesweeper.module.scss'
import { useState } from 'react'

type TModeName = 'beginner' | 'intermediate' | 'advanced'

const Minesweeper = () => {
  const [mode, setMode] = useState<TModeName>('beginner')

  const { row, column, mineCount } = useGameStats({ mode })
  const { board } = useBoard({ row, column })
  const { resetFirst } = usePlayer()

  // console.log(board)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMode(e.currentTarget.value as TModeName)
  }

  // useEffect(() => {
  //   resetFirst()
  // }, [resetFirst, boardInfo])

  return (
    <div className={styles.container}>
      <div className={styles.temp}>
        <button type="button" value="beginner" onClick={handleClick}>
          초급
        </button>

        <button type="button" value="intermediate" onClick={handleClick}>
          중급
        </button>

        <button type="button" value="advanced" onClick={handleClick}>
          고급
        </button>
      </div>

      <Board board={board} />
    </div>
  )
}

export default Minesweeper
