import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const User = db.define('users', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    role: Sequelize.STRING
},{
    freezeTableName: true
})

export default User;

(async() => {
    await db.sync();
})();