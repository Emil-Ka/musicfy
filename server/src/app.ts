import { config } from 'dotenv';
import express, { Express, Router } from 'express';
import { Sequelize } from 'sequelize';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';

import { ILogger } from './services/logger/logger.interface';
import { errorMiddleware } from './middlewares/error.middleware';
import models from './models';

config();

export class App {
	private app: Express;
	private port: number | string;
	private router: Router;
	private logger: ILogger;
	private sequelize: Sequelize;

	constructor(router: Router, logger: ILogger, sequelize: Sequelize) {
		this.app = express();
		this.port = process.env.PORT || 8000;
		this.router = router;
		this.logger = logger;
		this.sequelize = sequelize;
	}

	private async connectDB(): Promise<void> {
		try {
			await this.sequelize.authenticate();
			await this.sequelize.sync();

			this.logger.log('Успешное соединение с БД');
		} catch (err) {
			this.logger.error(err);
		}
	}

	public async init(): Promise<void> {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(express.static(path.resolve(__dirname, '..', 'static')));
		this.app.use(fileUpload({}));
		this.app.use('/api', this.router);
		this.app.use(errorMiddleware);

		await this.connectDB();
		this.app.listen(this.port);

		this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
	}
}
