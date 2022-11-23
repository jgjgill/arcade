import styles from '@components/Tetris/board.module.scss'
import Cell from '@components/Tetris/Cell'

import type { Board as TBoard } from '@@types/tetris'

interface Props {
  board: TBoard
}

const Board = ({ board }: Props) => {
  return (
    <div className={styles.wrapper}>
      {board.map((row) =>
        row.map((cell, index) => {
          const key = `${cell[0]}-${index}`
          return <Cell key={key} type={cell[0]} />
        }),
      )}
    </div>
  )
}

export default Board
