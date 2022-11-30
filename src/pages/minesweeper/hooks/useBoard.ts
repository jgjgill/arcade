import { buildBoard, createMineArray, injectMineArray } from '@src/utils/minesweeper'
import { useEffect, useState } from 'react'

interface Props {
  row: number
  column: number
  mineCount: number
  isFirst: boolean
  clickX: number
  clickY: number
}

const useBoard = ({ row, column, mineCount, isFirst, clickX, clickY }: Props) => {
  const [board, setBoard] = useState(buildBoard({ row, column }))

  const changeBoard = {
    // setBoard()
  }

  useEffect(() => {
    setBoard(buildBoard({ row, column }))
  }, [row, column])

  useEffect(() => {
    if (isFirst) return

    const newBoard = injectMineArray({
      mineArray: createMineArray({ row, column, mineCount, clickX, clickY }),
      board: buildBoard({ row, column }),
      column,
      row,
    })

    setBoard(newBoard)
  }, [isFirst, clickX, clickY, column, mineCount, row])

  // 클릭에 따른 보드 업데이트
  // dfs 로직 구현

  return { board }
}

export default useBoard
