import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from '../config/db.config';

interface ILiked extends Model<InferAttributes<ILiked>, InferCreationAttributes<ILiked>> {
	id: number;
	userId?: number;
}

export const Liked = sequelize.define<ILiked>('liked_songs', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
