import { createMineArray } from '@src/utils/minesweeper'
import { useState } from 'react'

const usePlayer = () => {
  const [isFirst, setIsFirst] = useState(true)

  const groundClick = () => {
    if (isFirst) {
      console.log('지뢰 생성')
      setIsFirst(false)
    } else {
      console.log('게임 시작')
    }
  }

  // const mine = createMineArray({
  //   clickIndex: 10,
  //   length: boardInfo.row * boardInfo.column,
  //   mineCount: boardInfo.mineCount,
  // })

  const resetFirst = () => {
    setIsFirst(true)
  }

  return { isFirst, groundClick, resetFirst }
}

export default usePlayer
