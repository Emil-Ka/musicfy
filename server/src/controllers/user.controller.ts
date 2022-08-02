import { Request, Response, NextFunction } from 'express';

class UserController {
	async login(req: Request, res: Response, next: NextFunction): Promise<void> {
		res.json({ name: 'login' });
	}
}

export default new UserController();
