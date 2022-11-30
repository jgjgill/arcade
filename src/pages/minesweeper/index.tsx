import { Board } from '@minesweeper/components'
import { useBoard, useGameStats, usePlayer } from '@minesweeper/hooks'
import styles from '@minesweeper/minesweeper.module.scss'
import { useState } from 'react'

type TModeName = 'beginner' | 'intermediate' | 'advanced'

const Minesweeper = () => {
  const [mode, setMode] = useState<TModeName>('beginner')

  const { row, column, mineCount } = useGameStats({ mode })
  const { isFirst, groundClick, clickX, clickY } = usePlayer({ mode })
  const { board } = useBoard({ row, column, isFirst, mineCount, clickX, clickY })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMode(e.currentTarget.value as TModeName)
  }

  const handleTemp = () => {
    groundClick()
  }

  return (
    <div className={styles.container}>
      <div className={styles.temp}>
        <button type="button" onClick={handleTemp}>
          임시 버튼
        </button>
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
