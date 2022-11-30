export const buildBoard = ({ row, column }: { row: number; column: number }) => {
  const board = Array.from({ length: row }, (_, r) =>
    Array.from({ length: column }, (_, c) => [r, c, 0]),
  )
  return board
}

interface Temp {
  row: number
  column: number
  clickX: number
  clickY: number
  mineCount: number
}

interface Calc {
  row: number
  clickX: number
  clickY: number
}

export const calcArrayIndex = ({ row, clickX, clickY }: Calc) => {
  return row * clickX + clickY
}

export const createNotClickIndexArray = (length: number, clickIndex: number) => {
  return Array.from({ length }, (_, i) => i).filter((item) => item !== clickIndex)
}

export const createMineArray = ({ row, column, clickX, clickY, mineCount }: Temp) => {
  const clickIndex = calcArrayIndex({ row, clickX, clickY })
  const numbers = createNotClickIndexArray(row * column, clickIndex)

  const mineArray = []

  while (mineArray.length !== mineCount) {
    const index = Math.floor(Math.random() * numbers.length)
    const random = numbers.splice(index, 1)[0]

    mineArray.push(random)
  }

  return mineArray
}

interface Inject {
  column: number
  row: number
  mineCount: number
  clickX: number
  clickY: number
}

export const injectMineArray = ({ column, row, mineCount, clickX, clickY }: Inject) => {
  const mineArray = createMineArray({ row, column, mineCount, clickX, clickY })
  const board = buildBoard({ row, column })

  mineArray.forEach((item) => {
    const mineRow = Math.floor(item / row)
    const mineColumn = item % column

    board[mineRow][mineColumn] = [mineRow, mineColumn, 999]
  })

  return board
}
