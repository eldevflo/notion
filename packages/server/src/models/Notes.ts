import Sequelize from "sequelize";

import { sequelize } from "../utils/database";
export const Notes = sequelize.define("Notes", {
  userId: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,

    references: {
      model: "Users",
      key: "id",
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data: {
    type: Sequelize.TEXT,
    get: function () {
      return JSON.parse(this.getDataValue("data"));
    },
    set: function (val) {
      return this.setDataValue("data", JSON.stringify(val));
    },
  },
});
