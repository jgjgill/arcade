import { CLEAR_ROW_POINTS } from '@src/utils/tetris'
import { useEffect, useState } from 'react'

const useGameStats = (rowsCleared: number) => {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(1)

  useEffect(() => {
    if (!rowsCleared) return

    console.log(rowsCleared)
    setScore((prev) => prev + CLEAR_ROW_POINTS[rowsCleared - 1] * level)
    setRows((prev) => prev + rowsCleared)
  }, [rowsCleared, level])

  return { score, setScore, rows, setRows, level, setLevel }
}

export default useGameStats
