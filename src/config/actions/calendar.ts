import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'calendars',
  initialState: {
    selectedDays: [] as any[],
    day: '',
  },
  reducers: {
    add(state, data) {
      state.selectedDays = data.payload;
    },
    setDay(state, data) {
      state.day = data.payload;
    },
  },
});

export const { add, setDay } = slice.actions;
export default slice.reducer;
