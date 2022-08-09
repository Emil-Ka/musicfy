import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import { v4 as uuid } from 'uuid';
import path from 'path';

import { ApiError } from '../../error/ApiError';
import { Playlist } from '../../models';

class PlaylistController {
	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { title, userId } = req.body;
			const cover = req.files.cover as UploadedFile;
			const coverName = uuid() + '.jpg';

			const playlist = await Playlist.create({ title, userId, cover: coverName });

			cover.mv(path.resolve(__dirname, '../../..', 'static', coverName));

			res.json(playlist);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params;

			const playlist = await Playlist.destroy({ where: { id } });

			res.json(playlist);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params;

			const playlist = await Playlist.findOne({ where: { id } });

			res.json(playlist);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async getByUserId(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { userId } = req.params;

			const playlists = await Playlist.findAndCountAll({ where: { userId } });

			res.json(playlists);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}
}

export default new PlaylistController();
