import styles from '@minesweeper/components/board/board.module.scss'
import Cell from '@minesweeper/components/board/cell'
import { buildBoard } from '@src/utils/minesweeper'
import React from 'react'

interface Props {
  boardInfo: { row: number; column: number; mineCount: number }
}

const Board = ({ boardInfo }: Props) => {
  const { row, column, mineCount } = boardInfo
  const board = buildBoard({ row, column })

  console.log(board)
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.game}
        style={{ '--row': row, '--column': column } as React.CSSProperties}
      >
        {board.map((row) =>
          row.map((cell, index) => {
            const key = `${cell[0]}-${index}`
            return <Cell key={key} index={cell[0]} type={cell[1]} />
          }),
        )}
      </div>
    </div>
  )
}

export default Board
