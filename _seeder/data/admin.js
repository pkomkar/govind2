const bcrypt = require("bcryptjs")
const admin = [{
    Email:"admin@example.com",
    Password:bcrypt.hashSync("1234",10)
}]
 module.exports = admin