export type TModeName = 'beginner' | 'intermediate' | 'advanced'
export type BoardCell = [number, number, number]
export type Board = BoardCell[][]
export type BoardInfo = { row: number; column: number; mine: number }
export type BoardRowColumn = Omit<BoardInfo, 'mine'>
export type ClickIndex = { clickX: number; clickY: number }
