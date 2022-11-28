export const buildBoard = ({ row, column }: { row: number; column: number }) => {
  const board = Array.from({ length: row }, (_, row) =>
    Array.from({ length: column }, (_, column) => [row, column, 0]),
  )

  return board
}

// 랜덤 폭탄 요소
