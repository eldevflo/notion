import express from "express";
import { client } from "../config/dbConfig";
export const userRouter = express.Router();
import { pool as db } from "../utils/database";

userRouter.post("/api/user/login", async (req, res) => {
  try {
  } catch (err) {
    res.send(err.message);
  } finally {
    client.close();
  }
});
userRouter.post("/api/user/signup", async (req, res) => {
  try {
    const { password, email, username } = req.body;
    db.execute(
      `INSERT INTO users (password, email, username) VALUES ("${password}" ," ${email}" , "${username}");`
    );

    res.status(200).send(req.body);
  } catch (err) {
    res.status(400).send(err.sqlMessage || err.message);
  } finally {
    client.close();
  }
});
