import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

export default new Sequelize({
	database: process.env.DB_NAME as string,
	username: process.env.DB_USER as string,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: 5432,
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			require: true, // This will help you. But you will see nwe error
			rejectUnauthorized: false, // This line will fix new error
		},
	},
});
