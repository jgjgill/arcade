import styles from '@minesweeper/components/board/cell/cell.module.scss'
import { cx } from '@src/styles'

interface Props {
  type: any
  // type: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
}

const Cell = ({ type }: Props) => {
  return <div className={cx(styles.cell, styles[`cell-${type}`])}>{type}</div>
}

export default Cell
