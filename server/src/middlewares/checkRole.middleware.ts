import { NextFunction, Request, Response } from 'express';
import { Roles, UserRequest } from '../controllers/user/user.controller.interfaces';
import { ApiError } from '../error/ApiError';
import jwt, { JwtPayload } from 'jsonwebtoken';

type FunctionType = (req: UserRequest, res: Response, next: NextFunction) => void;

export function checkRole(roles: Roles[]): FunctionType {
	return function (req: UserRequest, res: Response, next: NextFunction) {
		if (req.method === 'OPTIONS') {
			return next();
		}

		try {
			const token = req.headers.authorization.split(' ')[1];

			if (!token) {
				console.log('нет токена');
				return next(ApiError.unauthorized('Пользователь не авторизован'));
			}

			const decoded = jwt.verify(token, process.env.SECRET_KEY) as JwtPayload;

			if (!roles.includes(decoded.role)) {
				return next(ApiError.forbidden('Нет доступа'));
			}

			req.user = decoded;
			next();
		} catch (err) {
			console.log(err);
			return next(ApiError.unauthorized('Пользователь не авторизован'));
		}
	};
}
