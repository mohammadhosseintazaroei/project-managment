const { UserModel } = require("../../models/user");

class UserController {
    getProfile(req, res, next) {

        try {
            const user = req.user;
            return res.status(200).json({
                status: 20,
                success: true,
                user
            })
        } catch (error) {
            next(user)
        }
    }
    async editProfile(req, res, next) {
        try {
            let data = { ...req.body };
            console.log(data);
            const userID = req.user._id;
            let fields = ["first_name", "last_name", "skills"];
            let basValues = ["", " " , ".", null, undefined, 0, -1, NaN, [], {}]
            Object.entries(data).forEach(([key, value]) => {
                if (!fields.includes(key)) delete data[key];
                if (basValues.includes(value)) delete data[key];
            })
            console.log(data);
            const result = await UserModel.updateOne({ _id: userID }, { $set: data })
            if (result.modifiedCount > 0) {
                return res.status(200).json({
                    status: 200,
                    success: true,
                    message: "به روز رسانی  با موفقیت انحام شد"
                })
            }
            throw { status: 400, message: "به روز رسانی انجام نشد" }
        } catch (error) {
            error(next)
        }
    }
    async uploadProfileImage(req,res,next) {
        try {
            console.log(req.file);
        } catch (error) {
            next(error)
        }
    }
    addSkiils() {

    }
    acceptInviteInTeam() {

    }
    rejectInviteInTeam() {

    }
}
module.exports = {
    UserController: new UserController()
}