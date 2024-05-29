import { createSlice, isPending } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    access_token: '',
  },
  reducers: {
    updateUser: (state, action) => {
        const {name, email, access_token, exp, id} = action.payload;
        state.name = name || email;
        state.email = email;
        state.access_token = access_token
    },

    resetUser: (state) => {
      state.name = '';
      state.email = '';
      state.access_token = '';
      localStorage.removeItem('access_token');
  }
  }
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer