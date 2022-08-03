import { DataTypes } from 'sequelize';

import sequelize from '../config/db.config';

export const Track = sequelize.define('track', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, unique: true, allowNull: false },
	cover: { type: DataTypes.STRING },
});
