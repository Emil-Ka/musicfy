"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post('/login', controllers_1.userController.login);
router.post('/registration', controllers_1.userController.registration);
exports.default = router;
//# sourceMappingURL=user.route.js.map