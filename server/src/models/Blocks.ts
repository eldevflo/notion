import Sequelize from "sequelize";

import { sequelize } from "../utils/database";

export const Blocks = sequelize.define("Blocks", {
  noteId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Notes",
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
