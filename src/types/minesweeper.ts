export type TModeName = 'beginner' | 'intermediate' | 'advanced'
// export type CellInfo =
export type BoardCell = [
  number,
  number,
  'uncheck' | 'check' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 'mine' | 'mineFlag' | 'flag',
]
export type Board = BoardCell[][]
export type BoardInfo = { row: number; column: number; mine: number }
export type BoardRowColumn = Omit<BoardInfo, 'mine'>
export type ClickIndex = { clickX: number; clickY: number }
