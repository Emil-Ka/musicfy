import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from '../config/db.config';

interface IGenre extends Model<InferAttributes<IGenre>, InferCreationAttributes<IGenre>> {
	id: number;
	name: string;
	description: string;
	color: string;
}

export const Genre = sequelize.define<IGenre>('genre', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	description: { type: DataTypes.STRING },
	color: { type: DataTypes.STRING },
});
