import { configureStore } from '@reduxjs/toolkit';
import authAdminReducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        authAdmin: authAdminReducer
    }
});

export default store;