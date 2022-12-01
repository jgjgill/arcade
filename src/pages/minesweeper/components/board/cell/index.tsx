import { useAppDispatch } from '@hooks/state'
import styles from '@minesweeper/components/board/cell/cell.module.scss'
import { createFirstClickBoard } from '@states/minesweeper'
import { cx } from '@styles/index'

interface Props {
  x: number
  y: number
  type: any
  // type: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
}

const Cell = ({ x, y, type }: Props) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(createFirstClickBoard({ clickX: x, clickY: y }))
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cx(styles.cell, styles[`cell-${type}`])}
    >
      {type}
    </button>
  )
}

export default Cell
