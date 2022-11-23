import styles from '@components/Tetris/menu.module.scss'

interface Props {
  onClick: () => void
  gameInfo?: any
}

const Menu = ({ onClick, gameInfo }: Props) => {
  return (
    <div className={styles.container}>
      <button type="button" onClick={onClick} className={styles.button}>
        Play Tetris?
      </button>
    </div>
  )
}

export default Menu
