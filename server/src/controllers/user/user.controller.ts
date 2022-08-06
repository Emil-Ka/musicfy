import { Request, Response, NextFunction } from 'express';
import { UploadedFile } from 'express-fileupload';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import path from 'path';
import jwt from 'jsonwebtoken';

import { ApiError } from '../../error/ApiError';
import { Liked, User } from '../../models';
import {
	ILoginReqBody,
	IRegistrationReqBody,
	Roles,
	UserRequest,
} from './user.controller.interfaces';

function generateJWT(id: number, email: string, role = Roles.USER): string {
	const token = jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
	return token;
}

class UserController {
	async login(
		req: Request<any, any, ILoginReqBody>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { email, password } = req.body;

			if (!email || !password) {
				return next(ApiError.badRequest('Некорректный E-mail или пароль'));
			}

			const user = await User.findOne({ where: { email } });

			if (!user) {
				return next(ApiError.internalError('Пользователь с таким E-mail не существует'));
			}

			const comparePass = bcrypt.compareSync(password, user.password);

			if (!comparePass) {
				return next(ApiError.forbidden('Неверный пароль'));
			}

			const token = generateJWT(user.id, email, user.role);

			res.json({ token });
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async registration(
		req: Request<any, any, IRegistrationReqBody>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { name, email, password, role } = req.body;
			const avatar = req.files.avatar as UploadedFile;
			const avatarName = uuid() + '.jpg';

			if (!name || !email || !password) {
				return next(ApiError.badRequest('Не заданы нужные параметры'));
			}

			const candidate = await User.findOne({ where: { email } });

			if (candidate) {
				return next(ApiError.badRequest('Пользователь с таким email уже существует'));
			}

			avatar.mv(path.resolve(__dirname, '../../..', 'static', avatarName));

			const hashPassword = await bcrypt.hash(password, 5);
			const user = await User.create({
				name,
				email,
				password: hashPassword,
				avatar: avatarName,
				role,
			});

			await Liked.create({ userId: user.id });

			const token = generateJWT(user.id, email, role);

			res.json({ token });
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	check(req: UserRequest, res: Response, next: NextFunction): void {
		const token = generateJWT(req.user.id, req.user.email, req.user.role);
		res.json({ token });
	}

	async updateAvatar(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { userId } = req.body;
			const avatar = req.files.avatar as UploadedFile;
			const avatarName = uuid() + '.jpg';

			const user = await User.update({ avatar: avatarName }, { where: { id: userId } });
			avatar.mv(path.resolve(__dirname, '../../..', 'static', avatarName));

			return res.json(user);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}

	async updateName(req: Request, res: Response, next: NextFunction): Promise<Response> {
		try {
			const { userId, name } = req.body;

			const user = await User.update({ name }, { where: { id: userId } });

			return res.json(user);
		} catch (err) {
			next(ApiError.badRequest(err.message));
		}
	}
}

export default new UserController();
