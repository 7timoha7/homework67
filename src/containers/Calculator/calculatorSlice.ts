import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState {
  number: string;
}

const initialState: CalculatorState = {
  number: '',
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    btnCalkNumber: (state, action: PayloadAction<string | number>) => {
      const symbol = state.number[state.number.length - 1];

      if ((action.payload === '*' || action.payload === '/' || action.payload === '-' || action.payload === '+')) {
        if (symbol === '*' || symbol === '/' || symbol === '-' || symbol === '+') {
          state.number = state.number.slice(0, -1);
        }
      } else if (symbol === '*' || symbol === '/' || symbol === '0') {
        if (state.number.length === 1) {
          state.number = '';
        }
      }
      state.number += action.payload;
    },

    btnCalkDeleteOne: state => {
      state.number = state.number.slice(0, -1);
    },

    btnCalkDelete: state => {
      state.number = '';
    },

    btnEquals: state => {
      const symbol = state.number[state.number.length - 1]
      if (state.number.length) {
        if (state.number === '0/0') {
          state.number = '';
        } else if (symbol !== '*' && symbol !== '/' && symbol !== '-' && symbol !== '+') {
          // eslint-disable-next-line no-eval
          state.number = eval(state.number).toString();
        }
      }
    }
  }
})

export const calculatorReducer = calculatorSlice.reducer;
export const {btnCalkNumber, btnCalkDeleteOne, btnCalkDelete, btnEquals} = calculatorSlice.actions;