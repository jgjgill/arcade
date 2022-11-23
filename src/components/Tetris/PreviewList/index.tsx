import styles from '@components/Tetris/PreviewList/previewList.module.scss'

import PreviewItem from './PreviewItem'

interface Props {
  tetrominoes: any[]
}

const PreviewList = ({ tetrominoes }: Props) => {
  return (
    <ul>
      {tetrominoes.map((tetromino) => (
        <PreviewItem key={tetromino} tetromino={tetromino} />
      ))}
    </ul>
  )
}

export default PreviewList
