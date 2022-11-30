import styles from '@minesweeper/components/board/board.module.scss'
import Cell from '@minesweeper/components/board/cell'
import { Board as TBoard } from '@src/types/minesweeper'
import React from 'react'

interface Props {
  board: TBoard
}

const Board = ({ board }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.game}
        style={
          { '--row': board.length, '--column': board[0].length } as React.CSSProperties
        }
      >
        {board.map((row) =>
          row.map((cell, index) => {
            const key = `${cell[2]}-${index}`
            return <Cell key={key} index={cell[0]} type={cell[2]} />
          }),
        )}
      </div>
    </div>
  )
}

export default Board
