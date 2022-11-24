import PreviewItem from '@components/Tetris/PreviewList/PreviewItem'
import styles from '@components/Tetris/PreviewList/previewList.module.scss'

import type { TetrominoShape } from '@@types/tetris'

interface Props {
  tetrominoes: TetrominoShape[]
}

const PreviewList = ({ tetrominoes }: Props) => {
  return (
    <ul className={styles.temp}>
      {tetrominoes.map((tetromino, index) => {
        const key = `${tetromino}-${index}`
        return <PreviewItem key={key} tetromino={tetromino} />
      })}
    </ul>
  )
}

export default PreviewList
