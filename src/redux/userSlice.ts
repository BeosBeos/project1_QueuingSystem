import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {

  userName: "manhthong",
  fullName: "Mạnh Thông",
  phoneNumber: "0829891853",
  email: "manhthongg950@gmail.com",
  password: "beobeo",
  role: 0,
  avatar: "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/280456204_850331862593722_6796225965863368502_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6b8ZD6LhLQgAX9mByaG&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVLy1iQcrEj0mRs7GCqabx3fOwSLy25tnnxpzKWkhjaM9w&oe=62C2958E"
}

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state, actions) => {
        state.email = actions.payload.email
      },
      logout: (state) => {
        state.email = ""
      }
    },
  });
  
  // To able to use reducers we need to export them.
  export const { login, logout } = userSlice.actions;
  
  export default userSlice.reducer;