import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    userInfos: {} as any,
  },
  reducers: {
    setUserInfo(state, data) {
      state.userInfos = data.payload;
    },
  },
});

export const { setUserInfo } = slice.actions;
export default slice.reducer;
