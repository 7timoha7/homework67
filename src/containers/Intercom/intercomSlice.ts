import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IntercomState {
  value: string;
  asterisks: string
}

const initialState: IntercomState = {
  value: '',
  asterisks: '',
}

export const intercomSlice = createSlice({
  name: 'intercom',
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

export const intercomReducer = intercomSlice.reducer;
export const {btnDelete, btnNumber, btnDeleteOne} = intercomSlice.actions;