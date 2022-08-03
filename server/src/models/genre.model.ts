import { DataTypes } from 'sequelize';

import sequelize from '../config/db.config';

export const Genre = sequelize.define('genre', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	description: { type: DataTypes.STRING },
	color: { type: DataTypes.STRING },
});
