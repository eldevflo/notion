import Sequelize from "sequelize";

import { sequelize } from "../utils/database";
export const UserModel = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(64),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
