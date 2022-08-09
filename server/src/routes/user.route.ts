import { Router } from 'express';

import { userController } from '../controllers';
import { Roles } from '../controllers/user/user.controller.interfaces';
import { authMiddleware } from '../middlewares/auth.middleware';
import { checkRole } from '../middlewares/checkRole.middleware';

const router = Router();

router.post('/login', userController.login);
router.post('/registration', userController.registration);
router.get('/auth', authMiddleware, userController.check);
router.put('/updateAvatar', checkRole([Roles.ADMIN, Roles.USER]), userController.updateAvatar);
router.put('/updateName', checkRole([Roles.ADMIN, Roles.USER]), userController.updateName);

export default router;
