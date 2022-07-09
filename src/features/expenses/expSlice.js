import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import expService from "./expService";

const initialState = {
  expenses: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getall = createAsyncThunk("expenses/get", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await expService.getExpenses(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const post = createAsyncThunk("expenses/post", async (expdata, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await expService.postExpense(expdata, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const deleteExp = createAsyncThunk("expenses/delete", async (expdata, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await expService.deleteExpense(expdata, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const expSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getall.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getall.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.expenses = action.payload;
      })
      .addCase(getall.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.expenses = [];
      })
      .addCase(post.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(post.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.expenses.push(action.payload);
      })
      .addCase(post.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteExp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteExp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.expenses = state.expenses.filter((expense) => expense._id !== action.payload._id);
      })
      .addCase(deleteExp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = expSlice.actions;
export default expSlice.reducer;
