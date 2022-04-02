import { useDispatch } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import calendar from './actions/calendar';
import subjects from './actions/subjects';
import user from './actions/user';

const reducer = combineReducers({ subjects, calendar, user });
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
