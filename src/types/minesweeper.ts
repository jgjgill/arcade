export type TModeName = 'beginner' | 'intermediate' | 'advanced'
export type MineCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type CellInfo = 'uncheck' | 'check' | 'mine' | 'flag' | 'mineFlag' | MineCount
export type BoardCell = [number, number, CellInfo]
export type Board = BoardCell[][]
export type BoardInfo = { row: number; column: number; mine: number }
export type BoardRowColumn = Omit<BoardInfo, 'mine'>
export type ClickIndex = { clickX: number; clickY: number }
