import { DataTypes } from 'sequelize';

import sequelize from '../config/db.config';

export const Artist = sequelize.define('artist', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	nickname: { type: DataTypes.STRING, unique: true, allowNull: false },
	email: { type: DataTypes.STRING, unique: true, allowNull: false },
	password: { type: DataTypes.STRING, allowNull: false },
	firstName: { type: DataTypes.STRING },
	lastName: { type: DataTypes.STRING },
	avatar: { type: DataTypes.STRING },
	description: { type: DataTypes.STRING },
});
