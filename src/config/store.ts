import { useDispatch } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import calendar from './actions/calendar';
import pomodoroTime from './actions/pomodoroTime';
import subjects from './actions/subjects';
import user from './actions/user';

const reducer = combineReducers({ subjects, calendar, user, pomodoroTime });
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
