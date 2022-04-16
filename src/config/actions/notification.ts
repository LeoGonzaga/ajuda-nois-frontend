import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'notification',
  initialState: {
    notification: {
      open: false,
      autoClose: 0,
      error: false,
      message: 'Sua mensagem',
    },
  },
  reducers: {
    setNotification(state, data) {
      state.notification = data.payload;
    },
  },
});

export const { setNotification } = slice.actions;
export default slice.reducer;
