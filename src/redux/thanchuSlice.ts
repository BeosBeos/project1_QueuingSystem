import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ThanChuState } from './types';

//Defining our initialState's type
type initialStateType = {
  thanchuList: ThanChuState[];
};


const thanchuList: ThanChuState[] = []

const initialState: initialStateType = {
  thanchuList,
};

export const thanchuSlice = createSlice({
  name: 'thanchu',
  initialState,
  reducers: {
    addThanChu: (state, action: PayloadAction<ThanChuState>) => {
      // console.log(action.payload);
      
      state.thanchuList.push(action.payload);
    },
    
    
  },
});

// To able to use reducers we need to export them.
export const { addThanChu } = thanchuSlice.actions;

export default thanchuSlice.reducer;
