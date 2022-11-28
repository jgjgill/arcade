import styles from '@minesweeper/components/board/board.module.scss'
import Cell from '@minesweeper/components/board/cell'
import { buildBoard } from '@src/utils/minesweeper'
import React from 'react'

const Board = () => {
  const board = buildBoard({ row: 10, column: 10 })

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.game}
        style={{ '--row': 10, '--column': 10 } as React.CSSProperties}
      >
        {board.map((row) =>
          row.map((cell, index) => {
            const key = `${cell[0]}-${index}`
            return <Cell key={key} type={cell[2]} />
          }),
        )}
      </div>
    </div>
  )
}

export default Board
