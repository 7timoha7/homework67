import {configureStore} from "@reduxjs/toolkit";
import {intercomReducer} from "../containers/Intercom/intercomSlice";
import {calculatorReducer} from "../containers/Calculator/calculatorSlice";

export const store = configureStore({
  reducer: {
    intercom: intercomReducer,
    calculator: calculatorReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;