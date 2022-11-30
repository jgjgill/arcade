import { useEffect, useState } from 'react'

type TModeName = 'beginner' | 'intermediate' | 'advanced'
type BoardInfo = { row: number; column: number; mineCount: number }
type TMode = Record<TModeName, BoardInfo>

interface Props {
  mode: TModeName
}

const useGameStats = ({ mode }: Props) => {
  const [row, setRow] = useState(3)
  const [column, setColumn] = useState(3)
  const [mineCount, setMineCount] = useState(3)

  useEffect(() => {
    const firstBoard: TMode = {
      beginner: { row: 3, column: 3, mineCount: 3 },
      intermediate: { row: 5, column: 5, mineCount: 10 },
      advanced: { row: 10, column: 10, mineCount: 25 },
    }

    setRow(firstBoard[mode].row)
    setColumn(firstBoard[mode].column)
    setMineCount(firstBoard[mode].mineCount)
  }, [mode])

  return { row, column, mineCount }
}

export default useGameStats
