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
    incrementCountByAmount: {
      reducer: (state, action) => {
        state.steps = action.payload;
      },
      prepare: amount => {
        return { payload: amount };
      },
    },
  },
});

export const getValueAndSteps = (state) => state.counter;

export const { incrementCount, decrementCount, incrementCountByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
