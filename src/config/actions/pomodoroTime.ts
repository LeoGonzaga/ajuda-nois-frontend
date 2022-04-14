import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'pomodoroTime',
  initialState: {
    workTime: 15,
    breakTime: 5,
  },
  reducers: {
    setWorkTime(state, data) {
      state.workTime = data.payload;
    },
    setBreakTime(state, data) {
      state.breakTime = data.payload;
    },
  },
});

export const { setWorkTime, setBreakTime } = slice.actions;
export default slice.reducer;
