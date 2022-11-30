import styles from '@minesweeper/components/board/board.module.scss'
import Cell from '@minesweeper/components/board/cell'
import { buildBoard } from '@src/utils/minesweeper'
import React from 'react'

interface Props {
  board: number[][][]
}

const Board = ({ board }: Props) => {
  // console.log(board[0])
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
            const key = `${cell[0]}-${index}`
            return <Cell key={key} index={cell[0]} type={cell[2]} />
          }),
        )}
      </div>
    </div>
  )
}

export default Board
