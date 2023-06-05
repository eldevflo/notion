import express from "express";
import { client } from "../config/dbConfig";
import { dbName } from "../constants";
export const userRouter = express.Router();

userRouter.post("/api/user/login", async (req, res) => {
  try {
    const { password, email } = req.body;
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection("users");
    const user = await users.findOne({ email, password });
    if (user) {
      res.send({
        ...user,
        id: user._id,
      });
    } else {
      res.send(null);
    }
  } catch (err) {
    res.send(err.message);
  } finally {
    client.close();
  }
});
userRouter.post("/api/user/signup", async (req, res) => {
  try {
    const { password, email, username } = req.body;
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection("users");
    const user = await users.insertOne({ email, password, username });
    if (user) {
      res.send(user);
    } else {
      res.send(null);
    }
  } catch (err) {
    res.status(205).send(err.message);
  } finally {
    client.close();
  }
});
