import Board from '@components/Tetris/Board'
import GameStats from '@components/Tetris/GameStats'
import Menu from '@components/Tetris/Menu'
import PreviewList from '@components/Tetris/PreviewList'
import useBoard from '@hooks/useBoard'
import useGameStats from '@hooks/useGameStats'
import useInterval from '@hooks/useInterval'
import usePlayer from '@hooks/usePlayer'
import { isColliding } from '@utils/tetris'
import { useEffect, useRef, useState } from 'react'

import usePreview from './hooks/usePreview'

function App() {
  const [dropTime, setDropTime] = useState<null | number>(null)
  const [gameOver, setGameOver] = useState(true)

  const gameArea = useRef<HTMLDivElement>(null)

  const { previewList, resetPreview, removeFirstPreview, addPreview, firstPreview } =
    usePreview()

  const { player, updatePlayerPos, firstPlayer, resetPlayer, rotatePlayer } =
    usePlayer(firstPreview)

  const { board, resetBoard, rowsCleared } = useBoard({
    player,
    resetPlayer,
    removeFirstPreview,
  })

  const { score, rows, level, resetGameStats } = useGameStats(rowsCleared)

  const handleClickStartGame = () => {
    if (!gameArea.current) return

    gameArea.current.focus()
    setDropTime(1000)
    setGameOver(false)

    resetBoard()
    resetGameStats()
    resetPreview()

    firstPlayer()
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

  const move = ({ keyCode }: { keyCode: number }) => {
    if (gameOver) return
    if (keyCode < 37 || keyCode > 40) return

    // 37: left, 39: right, 40: down, 38: up
    const keyCodeFunc: Record<number, () => void> = {
      37: () => movePlayer(-1),
      39: () => movePlayer(1),
      40: () => setDropTime(30),
      38: () => rotatePlayer(board),
    }

    keyCodeFunc[keyCode]()
  }

  const drop = () => {
    if (isColliding({ player, board, moveX: 0, moveY: 1 })) {
      addPreview()
      updatePlayerPos({ x: 0, y: 0, collided: true })
    } else {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    }
  }

  useEffect(() => {
    if (!player.pos) return

    if (isColliding({ player, board, moveX: 0, moveY: 1 })) {
      if (player.pos.y < 1) {
        setGameOver(true)
        setDropTime(null)
      }
    }
  }, [player, board])

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
        gap: '100px',
        height: '100vh',
        padding: '20px 0',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
      }}
    >
      <Board board={board} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          gap: '25px',
        }}
      >
        <PreviewList tetrominoes={previewList} />
        <GameStats score={score} rows={rows} level={level} />
      </div>
      {gameOver && <Menu onClick={handleClickStartGame} />}
    </div>
  )
}

export default App
