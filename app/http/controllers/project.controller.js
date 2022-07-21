const { ProjectModel } = require("../../models/project");

class ProjectController {
    async createProject(req, res, next) {
        try {
            const { title, text, image,tags } = req.body;
            console.log(tags);
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
   async getAllProject(req, res, next) {
        try {
            const owner = req.user._id;
            const projects = await ProjectModel.find({ owner })
            return res.status(200).json({
                status: 200,
                success: true,
                projects
            })

        } catch (error) {
            next(error)
        }
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