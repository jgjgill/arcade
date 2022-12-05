import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@states/index'
import {
  buildBoard,
  checkAroundMine,
  createMineArray,
  updateBoardInfo,
  updateMineBoard,
} from '@utils/minesweeper'

import { Board, BoardInfo, CellInfo, ClickIndex, TModeName } from '@@types/minesweeper'

export interface DateState {
  boardInfo: BoardInfo
  board: Board
  status: 'stop' | 'start'
  isFirst: boolean
}

const INITIAL_STATE: DateState = {
  boardInfo: { row: 0, column: 0, mine: 0 },
  board: [],
  status: 'stop',
  isFirst: true,
}

const systemSlice = createSlice({
  name: 'minesweeper',
  initialState: INITIAL_STATE,
  reducers: {
    createBoard: (state, action: PayloadAction<{ mode: TModeName }>) => {
      const { mode } = action.payload

      const newBoardInfo = updateBoardInfo(mode)

      state.boardInfo.row = newBoardInfo.row
      state.boardInfo.column = newBoardInfo.column
      state.boardInfo.mine = newBoardInfo.mine
      state.isFirst = true
      state.board = buildBoard({ row: newBoardInfo.row, column: newBoardInfo.column })
      state.status = 'start'
    },
    createFirstClickBoard: (state, action: PayloadAction<ClickIndex>) => {
      if (!state.isFirst) return

      const { board } = state
      const { row, column, mine } = state.boardInfo
      const { clickX, clickY } = action.payload

      updateMineBoard(createMineArray({ row, column, mine, clickX, clickY }), {
        row,
        column,
        board,
      })
      checkAroundMine({ clickX, clickY, board, row, column })

      state.isFirst = false
    },
    clickGround: (state, action: PayloadAction<{ type: CellInfo } & ClickIndex>) => {
      if (state.isFirst) return

      const { board } = state
      const { row, column } = state.boardInfo
      const { clickX, clickY, type } = action.payload

      if (type === 'mine' || type === 'mineFlag') {
        state.status = 'stop'
        return
      }

      checkAroundMine({ clickX, clickY, board, row, column })
    },
    ctxMenuFlag: (state, action: PayloadAction<{ type: CellInfo } & ClickIndex>) => {
      const { clickX, clickY, type } = action.payload

      const changeType: Partial<Record<CellInfo, CellInfo>> = {
        mine: 'mineFlag',
        mineFlag: 'mine',
        uncheck: 'flag',
        flag: 'uncheck',
      }

      state.board[clickX][clickY][2] = changeType[type] ?? type
    },
  },
})

export const { createBoard, createFirstClickBoard, clickGround, ctxMenuFlag } =
  systemSlice.actions

export default systemSlice.reducer

export const selectBoard = (state: RootState) => state.minesweeper.board
export const selectIsFirst = (state: RootState) => state.minesweeper.isFirst
export const selectStatus = (state: RootState) => state.minesweeper.status
