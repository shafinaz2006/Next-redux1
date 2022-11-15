import { Action, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ColorState {
  color: string
}

const initialState: ColorState = {
  color: 'lightblue'
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeColor } = colorSlice.actions

export default colorSlice.reducer