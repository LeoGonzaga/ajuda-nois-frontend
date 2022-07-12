import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'admin',
  initialState: {
    student: {} as any,
    index: 0,
    quantity: 0,
  },
  reducers: {
    setStudent(state, data) {
      state.student = data.payload;
    },
    setActiveIndex(state, data) {
      state.index = data.payload;
    },
    setQuantity(state, data) {
      state.quantity = data.payload;
    },
  },
});

export const { setStudent, setActiveIndex, setQuantity } = slice.actions;
export default slice.reducer;
