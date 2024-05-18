import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShowAlertState {
  showAlert: boolean;
}

const initialState: ShowAlertState = {
  showAlert: false,
};

const showAlertSlice = createSlice({
  name: 'showAlert',
  initialState,
  reducers: {
    setShowAlert: (state, action: PayloadAction<boolean>) => {
      state.showAlert = action.payload;
    },
  },
});

export const { setShowAlert } = showAlertSlice.actions;
export default showAlertSlice;
