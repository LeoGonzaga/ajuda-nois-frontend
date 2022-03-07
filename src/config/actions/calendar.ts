import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'calendars',
  initialState: {
    selectedDays: [] as Date[],
  },
  reducers: {
    add(state, data) {
      state.selectedDays = data.payload;
    },
  },
});

export const { add } = slice.actions;
export default slice.reducer;
