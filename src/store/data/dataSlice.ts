import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDto } from '../../lib/types';

interface DataSlice {
  data: UserDto[] | null;
}

const initialState: DataSlice = {
  data: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<UserDto[] | null>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice;
