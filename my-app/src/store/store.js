import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  solvedCount: 0,
  correctCount: 0,
  answers: {},
  timeLeft: 2 * 60 * 60,
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    incrementCount(state) {
      state.solvedCount++;
    },
    incrementCorrectCount(state) {
      state.correctCount++;
    },
    addAnswer(state, action) {
      state.answers[action.payload.key] = action.payload.value;
    },
    setTimeLeft(state, action) {
      state.timeLeft = action.payload;
    },
    decrementTime(state) {
      state.timeLeft = state.timeLeft > 0 ? state.timeLeft - 1 : 0;
    },
    reset(state){
        state.solvedCount= 0;
        state.correctCount= 0;
        state.answers= {};
        state.timeLeft= 2*60*60;
    }
  },
});

export const examActions = examSlice.actions;

const store = configureStore({ reducer: { exam: examSlice.reducer } });

export default store;
