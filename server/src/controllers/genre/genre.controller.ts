import { Request, Response, NextFunction } from 'express';

import { ApiError } from '../../error/ApiError';
import { Album, AlbumArtist, AlbumGenre, Genre } from '../../models';

class GenreController {
	async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { name, description, color } = req.body;

			const genre = await Genre.create({ name, description, color });

			return res.json(genre);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getOne(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { id } = req.params;

			const genre = await Genre.findOne({ where: { id } });

			return res.json(genre);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const genres = await Genre.findAndCountAll();

			return res.json(genres);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}
}

export default new GenreController();
