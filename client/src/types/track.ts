export interface ITrack {
	id: number;
	title: string;
	cover: string;
	file: string;
	createdAt: string;
	updatedAt: string;
	albumId: number;
}

export interface ITracks {
	count: number;
	rows: ITrack[];
}

export interface InitialStateTrack extends ITracks {
	loading: boolean;
	error: string | null;
}

export enum TrackConstants {
	URL_GET_ALL = 'https://musicffy.herokuapp.com/api/track?limit=50',
}
