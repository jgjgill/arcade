import { useEffect, useState } from 'react'

type TModeName = 'beginner' | 'intermediate' | 'advanced'

interface Props {
  mode: TModeName
}

const usePlayer = ({ mode }: Props) => {
  const [isFirst, setIsFirst] = useState(true)
  const clickX = 2
  const clickY = 2

  // contextApi 사용?
  const groundClick = () => {
    if (isFirst) {
      console.log('지뢰 생성')
      setIsFirst(false)
    } else {
      console.log('게임 시작')
    }
  }

  useEffect(() => {
    setIsFirst(true)
  }, [mode])

  return { isFirst, groundClick, clickX, clickY }
}

export default usePlayer
