import { configureStore } from '@reduxjs/toolkit';
import showAlertSlice from './showAlert/showAlertSlice';

export const store = configureStore({
  reducer: {
    showAlert: showAlertSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
