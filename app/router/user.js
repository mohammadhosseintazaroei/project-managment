const { UserController } = require('../http/controllers/user.controller');
const { checkLogin } = require('../http/middlewares/autoLogin');
const { upload_multer } = require('../modules/multer');

const router = require('express').Router();

router.get("/profile", checkLogin, UserController.getProfile)
router.post("/profile", checkLogin, UserController.editProfile)
router.post("/profile-image", checkLogin, upload_multer.single("image"), UserController.uploadProfileImage)



module.exports = {
    userRoutes: router
}