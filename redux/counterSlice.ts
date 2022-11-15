import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decreamentByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decreamentByAmount } = counterSlice.actions;

export const counterValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer