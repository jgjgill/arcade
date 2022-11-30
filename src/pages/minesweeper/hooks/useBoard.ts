import { buildBoard } from '@src/utils/minesweeper'
import { useEffect, useState } from 'react'

type TModeName = 'beginner' | 'intermediate' | 'advanced'
type BoardInfo = { row: number; column: number; mineCount: number }
type TMode = Record<TModeName, BoardInfo>

const useBoard = ({ row, column }: { row: number; column: number }) => {
  const [board, setBoard] = useState(buildBoard({ row, column }))

  const changeBoard = {
    // setBoard()
  }

  useEffect(() => {
    setBoard(buildBoard({ row, column }))
  }, [row, column])

  // const board = buildBoard({ row, column })

  return { board }
}

export default useBoard
