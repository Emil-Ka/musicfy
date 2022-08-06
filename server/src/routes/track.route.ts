import { Router } from 'express';

import { trackController } from '../controllers';
import { Roles } from '../controllers/user/user.controller.interfaces';
import { checkRole } from '../middlewares/checkRole.middleware';

const router = Router();

router.post('/create', checkRole([Roles.ADMIN]), trackController.create);

router.post('/toPlaylist', checkRole([Roles.ADMIN, Roles.USER]), trackController.moveToPlaylist);
router.delete(
	'/removeFromPlaylist',
	checkRole([Roles.ADMIN, Roles.USER]),
	trackController.removeFromPlaylist,
);

router.post('/toLiked', checkRole([Roles.ADMIN, Roles.USER]), trackController.moveToLiked);
router.delete(
	'/removeFromLiked',
	checkRole([Roles.ADMIN, Roles.USER]),
	trackController.removeFromLiked,
);

router.post('/toAlbum', checkRole([Roles.ADMIN]), trackController.moveToAlbum);
router.delete('/removeFromAlbum', checkRole([Roles.ADMIN]), trackController.removeFromAlbum);

router.delete('/delete/:id', checkRole([Roles.ADMIN]), trackController.delete);

router.get('/:id', trackController.getOne);
router.get('/byTitle/:title', trackController.getByTitle);
router.get('/byAlbumId/:albumId', trackController.getByAlbumId);
router.get('/byGenreId/:genreId', trackController.getByGenreId);
router.get('/byArtistId/:artistId', trackController.getByArtistId);
router.get('/byPlaylistId/:playlistId', trackController.getByPlaylistId);
router.get('/byLikedId/:likedId', trackController.getByLikedId);
router.get('/', trackController.getAll);

export default router;
