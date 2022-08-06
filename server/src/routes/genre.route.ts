import { Router } from 'express';

import { genreController } from '../controllers';
import { Roles } from '../controllers/user/user.controller.interfaces';
import { checkRole } from '../middlewares/checkRole.middleware';

const router = Router();

router.post('/create', checkRole([Roles.ADMIN]), genreController.create);

router.get('/:id', genreController.getOne);
router.get('/', genreController.getAll);

export default router;
