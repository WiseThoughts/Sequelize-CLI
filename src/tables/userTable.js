const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");


const User = sequelize.define("User", {
    userName: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    }
});

module.exports = User;

