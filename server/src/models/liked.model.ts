import { DataTypes } from 'sequelize';

import sequelize from '../config/db.config';

export const Liked = sequelize.define('liked_songs', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
