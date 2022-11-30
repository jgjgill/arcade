import { calcArrayIndex } from '@src/utils/minesweeper'

type TModeName = 'beginner' | 'intermediate' | 'advanced'
type BoardInfo = { row: number; column: number; mineCount: number }
type TMode = Record<TModeName, BoardInfo>

const useBoard = (mode: TModeName) => {
  const firstBoard: TMode = {
    beginner: { row: 3, column: 3, mineCount: 3 },
    intermediate: { row: 5, column: 5, mineCount: 10 },
    advanced: { row: 10, column: 10, mineCount: 25 },
  }

  // const clickBoard = 23

  return { boardInfo: firstBoard[mode] }
}

export default useBoard
