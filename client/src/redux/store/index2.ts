import { configureStore, AnyAction, ThunkAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

import track from '../slices/trackSlice';

const combineReducer = combineReducers({
	track,
});

const reducer = (state: ReturnType<typeof combineReducer>, action: AnyAction) => {
	if (action.type === HYDRATE) {
		return {
			...state,
			...action.payload,
		};
	}

	return combineReducer(state, action);
};

export const makeStore = () => {
	return configureStore({
		reducer,
	});
};
