import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from '../config/db.config';
import { Roles } from '../controllers/user/user.controller.interfaces';

interface IUser extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
	id: number;
	name: string;
	email: string;
	password: string;
	avatar: string;
	role: Roles;
}

export const User = sequelize.define<IUser>('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false },
	email: { type: DataTypes.STRING, unique: true, allowNull: false },
	password: { type: DataTypes.STRING, allowNull: false },
	avatar: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: 'USER' },
});
