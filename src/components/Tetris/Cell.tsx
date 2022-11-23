import styles from '@components/Tetris/cell.module.scss'
import { cx } from '@src/styles'
import { memo } from 'react'

import type { TetrominosKey } from '@@types/tetris'

interface Props {
  type: TetrominosKey
}

const Cell = ({ type }: Props) => {
  return <div className={cx(styles.cell, styles[`cell-${type}`])} />
}

export default memo(Cell)
