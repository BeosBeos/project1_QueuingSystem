import { configureStore } from '@reduxjs/toolkit';
import thanchuSlice from './thanchuSlice';

// ...
const store = configureStore({
  reducer: {
    thanchu: thanchuSlice,
  },
  // composeWithDevTools() ,
})
export type RootState = ReturnType<typeof store.getState>

export default store




 