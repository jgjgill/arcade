import { Board } from '@minesweeper/components'
import styles from '@minesweeper/minesweeper.module.scss'
import { createMineArray } from '@src/utils/minesweeper'
import { useState } from 'react'

import useBoard from './hooks/useBoard'

type TModeName = 'beginner' | 'intermediate' | 'advanced'

const Minesweeper = () => {
  const [mode, setMode] = useState<TModeName>('beginner')

  const { boardInfo } = useBoard(mode)
  const mine = createMineArray({
    clickIndex: 10,
    length: boardInfo.row * boardInfo.column,
    mineCount: boardInfo.mineCount,
  })

  console.log(mine)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMode(e.currentTarget.value as TModeName)
  }

  // return temp[mode]

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

      <Board boardInfo={boardInfo} />
    </div>
  )
}

export default Minesweeper
