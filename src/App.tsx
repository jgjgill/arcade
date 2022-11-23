import Board from '@components/Tetris/Board'
import GameStats from '@components/Tetris/GameStats'
import Menu from '@components/Tetris/Menu'
import PreviewList from '@components/Tetris/PreviewList'
import usePlayer from '@hooks/usePlayer'
import { useRef, useState } from 'react'

import useBoard from './hooks/useBoard'
import useGameStats from './hooks/useGameStats'
import useInterval from './hooks/useInterval'
import { buildBoard, isColliding } from './utils/tetris'

function App() {
  const [dropTime, setDropTime] = useState<null | number>(null)
  const [gameOver, setGameOver] = useState(true)

  const gameArea = useRef<HTMLDivElement>(null)

  const { player, updatePlayerPos, resetPlayer, rotatePlayer } = usePlayer()
  const { board, setBoard, rowsCleared } = useBoard({ player, resetPlayer })
  const { score, setScore, rows, setRows, level, setLevel } = useGameStats(rowsCleared)

  const handleClickStartGame = () => {
    if (!gameArea.current) return

    gameArea.current.focus()
    setBoard(buildBoard())
    setDropTime(1000)
    setScore(0)
    setRows(0)
    setLevel(1)
    setGameOver(false)
    resetPlayer()
  }

  const movePlayer = (dir: number) => {
    if (isColliding({ player, board, moveX: dir, moveY: 0 })) return

    updatePlayerPos({ x: dir, y: 0, collided: false })
  }

  const keyUp = ({ keyCode }: { keyCode: number }) => {
    if (gameOver) return

    if (keyCode === 40) {
      setDropTime(1000)
    }
  }

  const move = ({ keyCode, repeat }: { keyCode: number; repeat: boolean }) => {
    if (gameOver) return

    // left
    if (keyCode === 37) {
      movePlayer(-1)
    }

    // right
    if (keyCode === 39) {
      movePlayer(1)
    }

    // down
    if (keyCode === 40) {
      if (repeat) return

      setDropTime(20)
    }

    // up
    if (keyCode === 38) {
      rotatePlayer(board)
    }
  }

  const drop = () => {
    if (isColliding({ player, board, moveX: 0, moveY: 1 })) {
      if (player.pos.y < 1) {
        console.log('game over!')
        setGameOver(true)
        setDropTime(null)
      }

      updatePlayerPos({ x: 0, y: 0, collided: true })
    } else {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)

  return (
    <div
      role={'button'}
      tabIndex={0}
      ref={gameArea}
      onKeyDown={move}
      onKeyUp={keyUp}
      style={{
        display: 'flex',
        gap: '10px',
        height: '100vh',
      }}
    >
      <Board board={board} />
      {gameOver && <Menu onClick={handleClickStartGame} />}
      <GameStats score={score} rows={rows} level={level} />
      {/* <PreviewList tetrominoes={[1, 2, 3]} /> */}
    </div>
  )
}

export default App
