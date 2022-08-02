import { config } from 'dotenv';
import express, { Express, Router } from 'express';
import { Sequelize } from 'sequelize';
import cors from 'cors';

import { ILogger } from './services/logger/logger.interface';

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
		this.connectDB();

		this.app.listen(this.port);
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use('/api', this.router);

		this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
	}
}
