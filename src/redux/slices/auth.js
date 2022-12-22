import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from '../services/auth';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

export const login = createAsyncThunk(
    'auth/login',
    async (userData, { rejectWithValue }) => {
        try {
            return authService.login(userData);
        } catch (err) {
            console.log(err);
            return rejectWithValue(err);
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (
        userData,
        { rejectWithValue }
    ) => {
        try {
            return authService.register(userData);
        } catch (err) {
            console.log(err);
            return rejectWithValue(err);
        }
    }
);

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        return authService.logout();
    } catch (err) {
        console.log(err);
        return err;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = 'Successfully logged in';
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = 'Could not log in';
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = 'Successfully logged out';
                state.user = null;
            })
            .addCase(logout.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.message = 'Could not log out';
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = 'Successfully registered';
                state.user = action.payload;
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.message = 'Could not register';
            });
    },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;