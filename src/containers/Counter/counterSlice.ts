import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
  value: string;
  asterisks: string
}

const initialState: CounterState = {
  value: '',
  asterisks: '',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    btnDelete: state => {
      state.value = '';
      state.asterisks = '';
    },

    btnNumber: (state, action: PayloadAction<number>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
        state.asterisks += '*';
      }
    },

    btnDeleteOne: (state) => {
      state.value = state.value.slice(0, -1);
      state.asterisks = state.asterisks.slice(0, -1);
    }
  }
})

export const counterReducer = counterSlice.reducer;
export const {btnDelete, btnNumber, btnDeleteOne} = counterSlice.actions;