const { validationResult } = require("express-validator");
const { UserModel } = require("../../models/user");
const { hashString, compareDataWithHash } = require("../../modules/functions");
const bcrypt = require("bcrypt")
class AuthController {
  async register(req, res, next) {
    try {
      const { username, password, email, mobile } = req.body;
      const hash_password = hashString(password)
      const user = await UserModel.create({
        username, email, password: hash_password, mobile
      }).catch(err => {
        if (err?.code == 11000) {
          throw { status: 400, message: "نام کاربری قبلا در سیستم ثبت  شده است" }
        }
      })
      return res.json(user)
    } catch (error) {
      next(error)
    }
  }
  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });
      if (!user) throw { status: 401, message: "نام کاربری یا رمز عبور اشتباه میباشد" };
      const compareResult = compareDataWithHash(password, user.password)
      if (!compareResult) throw { status: 401, message: "نام کاربری یا رمز عبور اشتباه میباشد" };
      return res.status(200).json({
        status: 200,
        success: true,
        message: "شما با موفقیت ورد حساب کاربری خود شدید",
      })
      return res.json(req.body)
    } catch (error) {
      next(error)
    }
  }
  resetPassword() {

  }
}

module.exports = {
  AuthController: new AuthController()
}