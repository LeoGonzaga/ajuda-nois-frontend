import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'pomodoroTime',
  initialState: {
    workTime: 15,
    breakTime: 5,
    isIdle: true,
    isPaused: false,
    modeType: 'work',
  },
  reducers: {
    setWorkTime(state, data) {
      state.workTime = data.payload;
    },
    setBreakTime(state, data) {
      state.breakTime = data.payload;
    },
    setIsIdle(state, data) {
      state.isIdle = data.payload;
    },
    setIsPaused(state, data) {
      state.isPaused = data.payload;
    },
    setModeType(state, data) {
      state.modeType = data.payload;
    },
  },
});

export const {
  setWorkTime,
  setBreakTime,
  setIsIdle,
  setIsPaused,
  setModeType,
} = slice.actions;
export default slice.reducer;
