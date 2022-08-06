import { Router } from 'express';

import { playlistController } from '../controllers';
import { Roles } from '../controllers/user/user.controller.interfaces';
import { checkRole } from '../middlewares/checkRole.middleware';

const router = Router();

router.post('/create', checkRole([Roles.ADMIN, Roles.USER]), playlistController.create);
router.delete('/delete/:id', checkRole([Roles.ADMIN, Roles.USER]), playlistController.delete);
router.get('/:id', checkRole([Roles.ADMIN, Roles.USER]), playlistController.getOne);
router.get(
	'/byUserId/:userId',
	checkRole([Roles.ADMIN, Roles.USER]),
	playlistController.getByUserId,
);

export default router;
