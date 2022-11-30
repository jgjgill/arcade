export const buildBoard = ({ row, column }: { row: number; column: number }) => {
  const board = Array.from({ length: row }, (_, r) =>
    Array.from({ length: column }, (_, c) => [r, c, 0]),
  )
  // row * r + c + 1
  return board
}

interface Temp {
  length: number
  clickIndex: number
  mineCount: number
}

interface Calc {
  row: number
  clickRow: number
  clickColumn: number
}

export const calcArrayIndex = ({ row, clickRow, clickColumn }: Calc) => {
  return row * clickRow + clickColumn
}

export const createNotClickIndexArray = (length: number, clickIndex: number) => {
  return Array.from({ length }, (_, i) => i).filter((item) => item !== clickIndex)
}

export const createMineArray = ({ length, clickIndex, mineCount }: Temp) => {
  const numbers = createNotClickIndexArray(length, clickIndex)

  const mineArray = []

  while (mineArray.length !== mineCount) {
    const index = Math.floor(Math.random() * numbers.length + 1)
    const random = numbers.splice(index, 1)[0]

    mineArray.push(random)
  }

  return mineArray
}

// 랜덤 폭탄 요소
// 필요한 데이터 => 행, 열, 지뢰 개수, 클릭한 인덱스

// 배열 크기 숫자에서 클릭 인덱스 삭제
// 지뢰 개수
