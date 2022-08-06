import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from '../config/db.config';

interface IAlbum extends Model<InferAttributes<IAlbum>, InferCreationAttributes<IAlbum>> {
	id: number;
	title: string;
	cover: string;
}

export const Album = sequelize.define<IAlbum>('album', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, unique: true, allowNull: false },
	cover: { type: DataTypes.STRING },
});
