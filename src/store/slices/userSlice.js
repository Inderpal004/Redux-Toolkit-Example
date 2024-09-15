import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => { 
      return state.filter((user, index) => index !== action.payload);
    },
    deleteAllUsers: (state, action) => {
      return [];
    },
  },
})

export const { addUser, deleteUser, deleteAllUsers } = userSlice.actions

export default userSlice.reducer