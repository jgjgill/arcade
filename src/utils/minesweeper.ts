import {
  Board,
  BoardCell,
  BoardInfo,
  BoardRowColumn,
  ClickIndex,
  TModeName,
} from '@@types/minesweeper'

export const updateBoardInfo = (mode: TModeName) => {
  const modeType: Record<TModeName, BoardInfo> = {
    beginner: { row: 3, column: 3, mine: 3 },
    intermediate: { row: 5, column: 5, mine: 5 },
    advanced: { row: 10, column: 10, mine: 10 },
  }

  return modeType[mode]
}

export const buildBoard = ({ row, column }: BoardRowColumn) => {
  const board = Array.from({ length: row }, (_, r) =>
    Array.from({ length: column }, (_, c) => [r, c, 0] as BoardCell),
  )
  return board as Board
}

export const calcArrayIndex = ({
  row,
  clickX,
  clickY,
}: Pick<BoardInfo, 'row'> & ClickIndex) => {
  return row * clickX + clickY
}

const createNotClickIndexArray = (length: number, clickIndex: number) => {
  return Array.from({ length }, (_, i) => i).filter((item) => item !== clickIndex)
}

export const createMineArray = ({
  row,
  column,
  clickX,
  clickY,
  mine,
}: BoardInfo & ClickIndex) => {
  const clickIndex = calcArrayIndex({ row, clickX, clickY })
  const numbers = createNotClickIndexArray(row * column, clickIndex)

  const mineArray = []

  while (mineArray.length !== mine) {
    const index = Math.floor(Math.random() * numbers.length)
    const random = numbers.splice(index, 1)[0]

    mineArray.push(random)
  }

  return mineArray
}

export const updateMineBoard = (
  mineArray: number[],
  { row, column, board }: BoardRowColumn & { board: Board },
) => {
  mineArray.forEach((item) => {
    const mineRow = Math.floor(item / row)
    const mineColumn = item % column

    board[mineRow][mineColumn] = [mineRow, mineColumn, 999]
  })
}
