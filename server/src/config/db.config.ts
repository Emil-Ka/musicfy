import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

export default new Sequelize(
	process.env.DB_NAME as string,
	process.env.DB_USER as string,
	process.env.DB_PASSWORD,
	{
		dialect: 'postgres',
		host: process.env.DB_HOST,
		port: 5432,
	},
);
