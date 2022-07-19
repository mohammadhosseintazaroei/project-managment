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
    editProfile() {

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