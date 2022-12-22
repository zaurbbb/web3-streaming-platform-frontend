import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';

const store = configureStore({
    reducer: {
        auth: authSlice,
    }
});


export default store;