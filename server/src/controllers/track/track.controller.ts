import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { v4 as uuid } from 'uuid';

import { ApiError } from '../../error/ApiError';
import {
	Artist,
	Genre,
	Playlist,
	Track,
	TrackArtist,
	TrackGenre,
	Liked,
	TrackLiked,
	TrackPlaylist,
} from '../../models';
import { ICreateReqBody, IGetAllReqQuery } from './track.controller.interface';

class TrackController {
	async create(
		req: Request<any, any, ICreateReqBody>,
		res: Response,
		next: NextFunction,
	): Promise<Response> {
		try {
			const { title, albumId } = req.body;
			let { genreIds, artistIds } = req.body;

			genreIds = JSON.parse(genreIds);
			artistIds = JSON.parse(artistIds);

			const cover = req.files.cover as UploadedFile;
			console.log('cover', cover);
			const coverName = uuid() + '.jpg';
			cover.mv(path.resolve(__dirname, '../../..', 'static', coverName));

			const file = req.files.file as UploadedFile;
			console.log('file', file);
			const fileName = uuid() + '.mp3';
			file.mv(path.resolve(__dirname, '../../..', 'static', fileName));

			const track = await Track.create({ title, cover: coverName, albumId, file: fileName });

			if (genreIds && genreIds.length) {
				for (const genreId of genreIds) {
					TrackGenre.create({ trackId: track.id, genreId });
				}
			}

			if (artistIds && artistIds.length) {
				for (const artistId of artistIds) {
					TrackArtist.create({ trackId: track.id, artistId });
				}
			}

			return res.json(track);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getAll(
		req: Request<any, any, any, IGetAllReqQuery>,
		res: Response,
		next: NextFunction,
	): Promise<Response> {
		try {
			let { limit, page } = req.query;

			page = page || 1;
			limit = limit || 10;

			const offset = page * limit - limit;
			const tracks = await Track.findAndCountAll({ limit, offset });

			return res.json(tracks);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByTitle(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { title } = req.params;

			const track = await Track.findOne({ where: { title } });

			return res.json(track);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByLikedId(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { likedId } = req.params;

			const tracks = await Liked.findAndCountAll({
				where: { id: likedId },
				attributes: [],
				include: [{ model: Track }],
			});

			return res.json(tracks);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByPlaylistId(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { playlistId } = req.params;

			const tracks = await Playlist.findAndCountAll({
				where: { id: playlistId },
				attributes: [],
				include: [{ model: Track }],
			});

			return res.json(tracks);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByGenreId(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { genreId } = req.params;

			const tracks = await Genre.findAndCountAll({
				where: { id: genreId },
				attributes: [],
				include: [{ model: Track }],
			});

			return res.json(tracks);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByAlbumId(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { albumId } = req.params;

			const tracks = await Track.findAndCountAll({
				where: { albumId },
			});

			return res.json(tracks);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByArtistId(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { artistId } = req.params;

			const tracks = await Artist.findAndCountAll({
				where: { id: artistId },
				attributes: [],
				include: [{ model: Track }],
			});

			return res.json(tracks);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getOne(
		req: Request<any, any, any, IGetAllReqQuery>,
		res: Response,
		next: NextFunction,
	): Promise<Response> {
		try {
			const { id } = req.params;

			const track = await Track.findOne({ where: { id } });

			return res.json(track);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async moveToLiked(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { trackId, userId } = req.body;

			const liked = await Liked.findOne({ where: { userId } });
			const likedId = liked.id;

			const trackLiked = await TrackLiked.create({ trackId, likedSongId: likedId });

			return res.json(trackLiked);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async moveToPlaylist(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { trackId, playlistId } = req.body;

			const trackPlaylist = await TrackPlaylist.create({ trackId, playlistId });

			return res.json(trackPlaylist);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async moveToAlbum(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { trackId, albumId } = req.body;

			const track = await Track.update({ albumId }, { where: { id: trackId } });

			return res.json(track);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async removeFromAlbum(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { trackId } = req.body;

			const track = await Track.update({ albumId: null }, { where: { id: trackId } });

			return res.json(track);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async removeFromPlaylist(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { trackId, playlistId } = req.body;

			const trackPlaylist = await TrackPlaylist.destroy({ where: { trackId, playlistId } });

			return res.json(trackPlaylist);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async removeFromLiked(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { trackId, userId } = req.body;

			const liked = await Liked.findOne({ where: { userId } });
			const likedId = liked.id;

			const trackLiked = await TrackLiked.destroy({ where: { trackId, likedSongId: likedId } });

			return res.json(trackLiked);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async delete(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { id } = req.params;

			const track = await Track.destroy({ where: { id } });

			return res.json(track);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}
}

export default new TrackController();
