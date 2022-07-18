const bcrypt = require("bcrypt")
function hashString(str) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(str, salt)
}
function compareDataWithHash(data, hashedString) {
    return bcrypt.compareSync(data, hashedString);
}
module.exports = {
    hashString,compareDataWithHash
};