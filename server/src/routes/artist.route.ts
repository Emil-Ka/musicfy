import { Router } from 'express';

import { artistController } from '../controllers';
import { Roles } from '../controllers/user/user.controller.interfaces';
import { checkRole } from '../middlewares/checkRole.middleware';

const router = Router();

router.post('/create', checkRole([Roles.ADMIN]), artistController.create);

router.get('/:id', artistController.getOne);
router.get('/byTrackId/:trackId', artistController.getByTrackId);
router.get('/byAlbumId/:albumId', artistController.getByAlbumId);
router.get('/', artistController.getAll);

export default router;
