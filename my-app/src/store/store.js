import { createSlice, configureStore } from '@reduxjs/toolkit';
import verify from '../components/Auth/verify';

const initialState = {
  solvedCount: 0,
  correctCount: 0,
  answers: {},
  timeLeft: 2 * 60 * 60,
};

const initialAuthState = {
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  isLoggedin: localStorage.getItem('isLoggedIn'),
};

const examSlice = createSlice({
  name: 'exam',
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
    reset(state) {
      state.solvedCount = 0;
      state.correctCount = 0;
      state.answers = {};
      state.timeLeft = 2 * 60 * 60;
    },
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedin = true;
    },
    logout(state) {
      state.isLoggedin = false;
      state.accessToken = '';
      state.refreshToken = '';
    },
    refresh(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    setLoggedin(state, action) {
      state.isLoggedin = action.payload.isLoggedin;
    },
  },
});

export const examActions = examSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: { exam: examSlice.reducer, auth: authSlice.reducer },
});

export default store;
