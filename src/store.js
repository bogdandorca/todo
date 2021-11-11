import { configureStore } from '@reduxjs/toolkit';
import listSlice from './features/list';

export const store = configureStore({
    reducer: {
        list: listSlice
    }
});
