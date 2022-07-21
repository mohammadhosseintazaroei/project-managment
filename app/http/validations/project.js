const { body } = require("express-validator")
function createProjectValidator() {
    return [
        body("title").notEmpty().withMessage("عنوان پروژه نمیتواند خالی باشد"),
        body("tags").isArray({ min: 0, max: 10 }).withMessage("حد اکثر استفاده از هشتک ها ده عدد میباشد"),
        body("text").notEmpty().isLength({ min: 20 }).withMessage("توضیحات پروژه نمیتواند خالی باشد حداقل باید 25 کارکتر داشته باشد"),
    ]
}

module.exports = {
    createProjectValidator
}