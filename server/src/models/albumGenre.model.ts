import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from '../config/db.config';

interface IAlbumGenre
	extends Model<InferAttributes<IAlbumGenre>, InferCreationAttributes<IAlbumGenre>> {
	albumId?: number;
	genreId?: number;
}

export const AlbumGenre = sequelize.define<IAlbumGenre>('album_genre', {});
