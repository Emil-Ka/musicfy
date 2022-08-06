import { Router } from 'express';

import { albumController } from '../controllers';
import { Roles } from '../controllers/user/user.controller.interfaces';
import { checkRole } from '../middlewares/checkRole.middleware';

const router = Router();

router.post('/create', checkRole([Roles.ADMIN]), albumController.create);
router.get('/byTitle/:title', albumController.getByTitle);
router.get('/byGenre/:genreId', albumController.getByGenre);
router.get('/byArtist/:artistId', albumController.getByArtist);
router.get('/:id', albumController.getOne);
router.get('/', albumController.getAll);

export default router;
