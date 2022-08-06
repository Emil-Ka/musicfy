import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { UserRequest } from '../controllers/user/user.controller.interfaces';
import { ApiError } from '../error/ApiError';

export function authMiddleware(req: UserRequest, res: Response, next: NextFunction): void {
	if (req.method === 'OPTIONS') {
		return next();
	}

	try {
		const token = req.headers.authorization.split(' ')[0]; //Bearer dcdcv232jij21232

		if (!token) {
			return next(ApiError.unauthorized('Пользователь не авторизован'));
		}

		const decoded = jwt.verify(token, process.env.SECRET_KEY) as JwtPayload;
		req.user = decoded;

		return next();
	} catch (err) {
		next(ApiError.unauthorized('Пользователь не авторизован'));
	}
}
