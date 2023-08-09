import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: 1,
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: state => {
      state.value += state.steps;
    },
    decrementCount: state => {
      state.value -= state.steps;
    },
    incrementCountByAmount: (state, action) => {
      state.steps = action.payload;
    },
  },
});

export const { incrementCount, decrementCount, incrementCountByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
