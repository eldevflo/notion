// import mysql from "mysql2";
// const poolInstance = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "notes-schema",
//   password: "63156315",
// });
// export const pool = poolInstance.promise();
import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("notes-schema", "root", "63156315", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false,
  },
});
