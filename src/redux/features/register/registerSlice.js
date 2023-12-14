import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (payload) => {
    try {
      const res = await axios.post(
        "https://api.mudoapi.tech/register",
        payload
      );
      //   console.log(res.data);
      return res.data;
    } catch (error) {
      //   console.log(error.response);
      return error.response.data;
    }
  }
);

const initialState = {
  submit: "",
  loadingRegister: false,
  error: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loadingRegister = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loadingRegister = false;
        state.submit = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loadingRegister = false;
        state.submit = "success";
        state.error = action.error.message;
      });
  },
});

export default registerSlice.reducer;
