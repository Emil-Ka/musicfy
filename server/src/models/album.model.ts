import { DataTypes } from 'sequelize';

import sequelize from '../config/db.config';

export const Album = sequelize.define('album', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, unique: true, allowNull: false },
	cover: { type: DataTypes.STRING },
});
