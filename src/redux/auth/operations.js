// import axios from 'axios';
import { nanoid } from 'nanoid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fakePending } from 'utils/fakeRequests';

// axios.defaults.baseURL = '';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

/* Web-token imitation */

const setAuthHeader = userData => {
  const data = {
    user: { name: userData.name, email: userData.email },
    token: nanoid(),
  };
  return data;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      await fakePending();
      const data = setAuthHeader(credentials);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      await fakePending();
      const data = setAuthHeader(credentials);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await fakePending();
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.authData.token;
    const persistedData = state.authData.user;

    if (persistedToken === null)
      return thunkAPI.rejectWithValue('Unable to fetch user');

    try {
      await fakePending();
      return persistedData;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
