import styles from '@components/Tetris/PreviewList/PreviewItem/previewItem.module.scss'

interface Props {
  tetromino: any
}

const PreviewItem = ({ tetromino }: Props) => {
  return <li>{tetromino}</li>
}

export default PreviewItem
