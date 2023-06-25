import express from "express";
import { client } from "../config/dbConfig";
export const userRouter = express.Router();
import { pool as db } from "../utils/database";

userRouter.post("/api/user/login", async (req, res) => {
  const { password, email } = req.body;
  db.execute(
    `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
  )
    .then(([rows, fieldsData]) => {
      res.status(200).send({ data: rows[0] });
    })
    .catch((err) => res.status(402).send(err.message));
});
userRouter.post("/api/user/signup", async (req, res) => {
  const { password, email, username } = req.body;
  db.execute(
    `INSERT INTO users (password, email, username) VALUES ("${password}" ," ${email}" , "${username}");`
  )
    .then(([rows, fieldsData]) => {
      res.status(200).send({ data: rows[0] });
    })
    .catch((err) => res.status(402).send(err.message));
});
