import styles from '@components/Tetris/menu.module.scss'

interface Props {
  onClick: () => void
}

const Menu = ({ onClick }: Props) => {
  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={onClick} className={styles.button}>
        Play Tetris?
      </button>
    </div>
  )
}

export default Menu
