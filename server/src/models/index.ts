import sequelize from '../config/db.config';

import { Album } from './album.model';
import { AlbumArtist } from './albumArtist.model';
import { AlbumGenre } from './albumGenre.model';
import { Artist } from './artist.model';
import { Genre } from './genre.model';
import { Liked } from './liked.model';
import { Playlist } from './playlist.model';
import { Track } from './track.model';
import { TrackArtist } from './trackArtist.model';
import { TrackGenre } from './trackGenre.model';
import { TrackLiked } from './trackLiked.model';
import { TrackPlaylist } from './trackPlaylist.model';
import { User } from './user.model';

User.hasOne(Liked);
Liked.belongsTo(User);

User.hasMany(Playlist);
Playlist.belongsTo(User);

Album.hasMany(Track);
Track.belongsTo(Album);

Liked.belongsToMany(Track, { through: TrackLiked });
Track.belongsToMany(Liked, { through: TrackLiked });

Playlist.belongsToMany(Track, { through: TrackPlaylist });
Track.belongsToMany(Playlist, { through: TrackPlaylist });

Track.belongsToMany(Artist, { through: TrackArtist });
Artist.belongsToMany(Track, { through: TrackArtist });

Genre.belongsToMany(Track, { through: TrackGenre });
Track.belongsToMany(Genre, { through: TrackGenre });

Album.belongsToMany(Artist, { through: AlbumArtist });
Artist.belongsToMany(Album, { through: AlbumArtist });

Album.belongsToMany(Genre, { through: AlbumGenre });
Genre.belongsToMany(Album, { through: AlbumGenre });

export default { User, Track, Playlist, Liked, Genre, Artist, Album };
export {
	User,
	Track,
	Playlist,
	Liked,
	Genre,
	Artist,
	Album,
	AlbumArtist,
	AlbumGenre,
	TrackArtist,
	TrackGenre,
	TrackLiked,
	TrackPlaylist,
};
