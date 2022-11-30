import { buildBoard, injectMineArray } from '@src/utils/minesweeper'
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

    console.log('처음 클릭에 따른 보드 재생성')
    setBoard(injectMineArray({ row, column, mineCount, clickX, clickY }))
  }, [isFirst, clickX, clickY, column, mineCount, row])

  return { board }
}

export default useBoard
