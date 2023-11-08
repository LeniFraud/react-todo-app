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

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      // const { data } = await axios.post('/users/signup', credentials);
      // setAuthHeader(data.token);
      // return data;
      await fakePending();
      const data = setAuthHeader(credentials);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // const { data } = await axios.post('/users/login', credentials);
      // setAuthHeader(data.token);
      // return data;
      await fakePending();
      const data = setAuthHeader(credentials);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await fakePending();
    // await axios.post('/users/logout');
    // clearAuthHeader();
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.authData.token;
    const persistedData = state.authData.user;

    if (persistedToken === null)
      return thunkAPI.rejectWithValue('Unable to fetch user');

    try {
      // setAuthHeader(persistedToken);
      // const { data } = await axios.get('/users/current');
      // return data;
      await fakePending();
      return persistedData;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
