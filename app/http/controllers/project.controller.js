const { ProjectModel } = require("../../models/project");

class ProjectController {
    async createProject(req, res, next) {
        try {
            const { title, text, image } = req.body;
            const owner = req.user._id;
            const image_path = image.substring(7);
            const result = await ProjectModel.create({ title, text, owner, image: image_path });
            if (!result) throw { status: 400, message: "افزودن پروژه با خطا مواجه شد" };
            return res.status(201).json({
                status: 201,
                success: true,
                message: "پروژه با موفقیت افزوده شد"
            })

        } catch (error) {
            next(error)
        }
    }
    getAllProject() {

    }
    getProjectById() {

    }

    getProjectOfTeam() {

    }
    getProjectOfUser() {

    }
    updateProject() {

    }
    removeProject() {

    }
}

module.exports = {
    ProjectController: new ProjectController()
}