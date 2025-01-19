import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../interfaces";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [] as User[],
    loadingUsers: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loadingUsers = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loadingUsers = false;
        state.users = action.payload;
      });
  },
});

export default usersSlice.reducer;
