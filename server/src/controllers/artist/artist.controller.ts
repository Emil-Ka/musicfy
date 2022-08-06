import { Request, Response, NextFunction } from 'express';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { v4 as uuid } from 'uuid';

import { ApiError } from '../../error/ApiError';
import { Album, Artist, Track } from '../../models';

class ArtistController {
	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { nickname, firstName, lastName, description } = req.body;
			const avatar = req.files.avatar as UploadedFile;
			const avatarName = uuid() + '.jpg';

			if (!nickname || !firstName || !lastName) {
				return next(ApiError.badRequest('Не заданы нужные параметры'));
			}

			const artist = await Artist.create({
				nickname,
				firstName,
				lastName,
				description,
				avatar: avatarName,
			});

			avatar.mv(path.resolve(__dirname, '../../..', 'static', avatarName));

			res.json(artist);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getOne(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { id } = req.params;

			const artist = await Artist.findOne({ where: { id } });

			return res.json(artist);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByTrackId(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { trackId } = req.params;

			const artists = await Track.findAndCountAll({
				where: { id: trackId },
				attributes: [],
				include: [{ model: Artist }],
			});

			return res.json(artists);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByAlbumId(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { albumId } = req.params;

			const artists = await Album.findAndCountAll({
				where: { id: albumId },
				attributes: [],
				include: [{ model: Artist }],
			});

			return res.json(artists);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const artists = await Artist.findAndCountAll();

			return res.json(artists);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}
}

export default new ArtistController();
