import styles from '@home/home.module.scss'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/arcade/tetris')
  }

  return (
    <div className={styles.container}>
      <h1>Game List</h1>

      <ul>
        <li>
          <button type="button" onClick={handleClick} className={styles.gameButton}>
            테트리스
          </button>
        </li>
      </ul>

      <h2>Coming soon...</h2>
      <span>지뢰 찾기!</span>
    </div>
  )
}

export default Home
