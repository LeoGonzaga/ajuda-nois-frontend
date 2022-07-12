import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'admin',
  initialState: {
    student: {} as any,
  },
  reducers: {
    setStudent(state, data) {
      state.student = data.payload;
    },
  },
});

export const { setStudent } = slice.actions;
export default slice.reducer;
