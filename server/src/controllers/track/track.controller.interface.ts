import { Request } from 'express';

export interface ICreateReqBody {
	title: string;
	cover: string;
	albumId: string | null;
	genreIds: string | null;
	artistIds: string | null;
}

export interface IGetAllReqQuery {
	id: string;
	title: string;
	albumId: string | null;
	genreId: string | null;
	artistId: string | null;
	playlistId: string | null;
	likedId: string | null;
	limit: number;
	page: number;
}
