const Application = require("./app/server");
const DB_URL = "mongodb://localhost:27017/ProjectManagmentDb";
require('dotenv').config()
new Application(3000, DB_URL);


