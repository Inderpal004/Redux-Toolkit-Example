import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase: (state) => {
      return state + 1;
    },
    decrease: (state) => {
      return state > 0 ? state - 1 : 0;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
