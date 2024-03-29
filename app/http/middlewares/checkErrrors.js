const { validationResult } = require("express-validator");

function expressValidatorMapper(req, res, next) {
    let messages = {};

    const result = validationResult(req)
    messages = {}
    if (result?.errors?.length > 0) {
        result?.errors.forEach((err) => {
            messages[err.param] = err.msg
        })
        return res.status(400).json({
            status: 400,
            success: true,
            messages
        })
    }
    next()
}
module.exports = {
    expressValidatorMapper
}