import { DataTypes } from 'sequelize';

import sequelize from '../config/db.config';

export const Playlist = sequelize.define('playlist', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	cover: { type: DataTypes.STRING },
});
