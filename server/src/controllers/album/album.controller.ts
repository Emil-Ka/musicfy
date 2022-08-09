import { Request, Response, NextFunction } from 'express';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { v4 as uuid } from 'uuid';

import { ApiError } from '../../error/ApiError';
import { Album, AlbumArtist, AlbumGenre, Artist, Genre } from '../../models';
import { IGetAllReqQuery } from './album.controller.interface';

class AlbumController {
	async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { title } = req.body;
			let { genreIds, artistIds } = req.body;
			const cover = req.files.cover as UploadedFile;
			const coverName = uuid() + '.jpg';

			genreIds = JSON.parse(genreIds);
			artistIds = JSON.parse(artistIds);

			const album = await Album.create({ title, cover: coverName });

			if (genreIds) {
				for (const genreId of genreIds) {
					AlbumGenre.create({ genreId, albumId: album.id });
				}
			}

			if (artistIds) {
				for (const artistId of artistIds) {
					AlbumArtist.create({ albumId: album.id, artistId });
				}
			}

			cover.mv(path.resolve(__dirname, '../../..', 'static', coverName));

			return res.json(album);
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

			const albums = await Album.findAndCountAll({ limit, offset });

			return res.json(albums);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByTitle(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { title } = req.params;

			const album = await Album.findOne({ where: { title } });

			return res.json(album);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByGenre(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { genreId } = req.params;

			const albums = await Genre.findAndCountAll({
				where: { id: genreId },
				attributes: [],
				include: [{ model: Album }],
			});

			return res.json(albums);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByArtist(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { artistId } = req.params;

			const albums = await Artist.findAndCountAll({
				where: { id: artistId },
				attributes: [],
				include: [{ model: Album }],
			});

			return res.json(albums);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getOne(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { id } = req.params;

			const album = await Album.findOne({ where: { id } });

			return res.json(album);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}
}

export default new AlbumController();
