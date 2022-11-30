import styles from '@minesweeper/components/board/cell/cell.module.scss'
import { cx } from '@src/styles'

interface Props {
  index: number
  type: any
  // type: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
}

const Cell = ({ index, type }: Props) => {
  // console.log(type)
  // contextApi 활용해야할듯

  const handleTemp = () => {
    // groundClick()
  }

  return (
    <button
      type="button"
      onClick={handleTemp}
      className={cx(styles.cell, styles[`cell-${type}`])}
    >
      {type}
    </button>
  )
}

export default Cell
