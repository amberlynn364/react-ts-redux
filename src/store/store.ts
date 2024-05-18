import { configureStore } from '@reduxjs/toolkit';
import showAlertSlice from './showAlert/showAlertSlice';
import dataSlice from './data/dataSlice';
import isLoadingSlice from './isLoading/isLoadingSlice';

export const store = configureStore({
  reducer: {
    showAlert: showAlertSlice.reducer,
    data: dataSlice.reducer,
    isLoading: isLoadingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
