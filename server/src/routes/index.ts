import { Router } from 'express';

import userRouter from './user.route';
import trackRouter from './track.route';
import artistRouter from './artist.route';
import playlistRouter from './playlist.route';
import albumRouter from './album.route';
import genreRouter from './genre.route';

const router = Router();

router.use('/user', userRouter);
router.use('/track', trackRouter);
router.use('/artist', artistRouter);
router.use('/playlist', playlistRouter);
router.use('/album', albumRouter);
router.use('/genre', genreRouter);

export default router;
