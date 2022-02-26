import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'subjects',
  initialState: {
    selectedSubject: [] as any,
  },
  reducers: {
    add(state, data) {
      state.selectedSubject = data.payload;
    },
  },
});

export const { add } = slice.actions;
export default slice.reducer;
