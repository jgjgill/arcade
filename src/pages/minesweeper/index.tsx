import { useAppDispatch, useAppSelector } from '@hooks/state'
import { Board } from '@minesweeper/components'
import styles from '@minesweeper/minesweeper.module.scss'
import { createBoard, selectBoard } from '@states/minesweeper'

import { TModeName } from '@@types/minesweeper'

const Minesweeper = () => {
  const dispatch = useAppDispatch()
  const board = useAppSelector(selectBoard)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(createBoard({ mode: e.currentTarget.value as TModeName }))
  }

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

      <Board board={board} isView={board.length !== 0} />
    </div>
  )
}

export default Minesweeper
