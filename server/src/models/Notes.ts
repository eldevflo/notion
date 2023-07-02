import Sequelize from "sequelize";

import { sequelize } from "../utils/database";
import { UserModel } from "./User";
export const Notes = sequelize.define("Notes", {
  userId: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,

    references: {
      model: "Users",
      key: "id",
    },
  },
  data: {
    type: Sequelize.STRING,
    get: function () {
      return JSON.parse(this.getDataValue("data"));
    },
    set: function (val) {
      return this.setDataValue("data", JSON.stringify(val));
    },
  },
});
