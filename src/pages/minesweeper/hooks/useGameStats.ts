import { useState } from 'react'

interface Props {
  mode: '초급' | '중급' | '고급'
}

const useGameStats = ({ mode }: Props) => {
  const temp = {
    초급: { row: 2, column: 2, mineCount: 2 },
    중급: { row: 5, column: 5, mineCount: 10 },
    고급: { row: 10, column: 10, mineCount: 25 },
  }

  return temp[mode]
}

export default useGameStats
