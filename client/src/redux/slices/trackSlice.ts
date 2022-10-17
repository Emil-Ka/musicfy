import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { InitialStateTrack, ITracks, TrackConstants } from '../../types/track';

const initialState: InitialStateTrack = {
	loading: false,
	error: null,
	count: 1,
	rows: [
		{
			id: 5,
			title: 'Я в моменте',
			cover: '52a59f02-d7f3-4ace-8a7a-571e6f47516c.jpg',
			file: 'd782ce36-f7e5-4ab3-b6f0-0237cc60631f.mp3',
			createdAt: '2022-08-22T16:26:19.977Z',
			updatedAt: '2022-08-22T16:26:19.977Z',
			albumId: 1,
		},
	],
};

export const fetchTracks = createAsyncThunk('track/fetchTracks', async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.get<ITracks>(TrackConstants.URL_GET_ALL);
		return data;
	} catch (err) {
		if (err instanceof Error) {
			return rejectWithValue(err.message);
		}
	}
});

const TrackSlice = createSlice({
	initialState,
	name: 'track',
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTracks.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchTracks.fulfilled, (state, action) => {
				state.loading = false;

				if (action.payload?.count && action.payload?.rows) {
					state.count = action.payload?.count;
					state.rows = action.payload?.rows;
				}
			})
			.addCase(fetchTracks.rejected, (state, action) => {
				state.loading = false;
				state.count = 0;
				state.rows = [];

				if (action.error.message) {
					state.error = action.error.message;
				}
			})
			.addDefaultCase((state) => {
				state.loading = false;
				state.error = null;
			});
	},
});

const { actions, reducer } = TrackSlice;

export default reducer;
