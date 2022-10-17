import { configureStore } from '@reduxjs/toolkit';

import track from '../slices/trackSlice';

export const store = configureStore({
	reducer: {
		track,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type TypeState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
