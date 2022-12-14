"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const user_controller_interfaces_1 = require("../controllers/user/user.controller.interfaces");
const checkRole_middleware_1 = require("../middlewares/checkRole.middleware");
const router = (0, express_1.Router)();
router.post('/create', (0, checkRole_middleware_1.checkRole)([user_controller_interfaces_1.Roles.ADMIN]), controllers_1.trackController.create);
router.post('/toPlaylist', (0, checkRole_middleware_1.checkRole)([user_controller_interfaces_1.Roles.ADMIN, user_controller_interfaces_1.Roles.USER]), controllers_1.trackController.moveToPlaylist);
router.delete('/removeFromPlaylist', (0, checkRole_middleware_1.checkRole)([user_controller_interfaces_1.Roles.ADMIN, user_controller_interfaces_1.Roles.USER]), controllers_1.trackController.removeFromPlaylist);
router.post('/toLiked', (0, checkRole_middleware_1.checkRole)([user_controller_interfaces_1.Roles.ADMIN, user_controller_interfaces_1.Roles.USER]), controllers_1.trackController.moveToLiked);
router.delete('/removeFromLiked', (0, checkRole_middleware_1.checkRole)([user_controller_interfaces_1.Roles.ADMIN, user_controller_interfaces_1.Roles.USER]), controllers_1.trackController.removeFromLiked);
router.post('/toAlbum', (0, checkRole_middleware_1.checkRole)([user_controller_interfaces_1.Roles.ADMIN]), controllers_1.trackController.moveToAlbum);
router.delete('/removeFromAlbum', (0, checkRole_middleware_1.checkRole)([user_controller_interfaces_1.Roles.ADMIN]), controllers_1.trackController.removeFromAlbum);
router.delete('/delete/:id', (0, checkRole_middleware_1.checkRole)([user_controller_interfaces_1.Roles.ADMIN]), controllers_1.trackController.delete);
router.get('/:id', controllers_1.trackController.getOne);
router.get('/byTitle/:title', controllers_1.trackController.getByTitle);
router.get('/byAlbumId/:albumId', controllers_1.trackController.getByAlbumId);
router.get('/byGenreId/:genreId', controllers_1.trackController.getByGenreId);
router.get('/byArtistId/:artistId', controllers_1.trackController.getByArtistId);
router.get('/byPlaylistId/:playlistId', controllers_1.trackController.getByPlaylistId);
router.get('/byLikedId/:likedId', controllers_1.trackController.getByLikedId);
router.get('/', controllers_1.trackController.getAll);
exports.default = router;
//# sourceMappingURL=track.route.js.map