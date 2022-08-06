import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from '../config/db.config';

interface ITrack extends Model<InferAttributes<ITrack>, InferCreationAttributes<ITrack>> {
	id: number;
	title: string;
	cover: string;
	file: string;
	albumId?: string;
}

export const Track = sequelize.define<ITrack>('track', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, unique: true, allowNull: false },
	cover: { type: DataTypes.STRING },
	file: { type: DataTypes.STRING, allowNull: false },
});
