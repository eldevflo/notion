import express from "express";
import { client } from "../config/dbConfig";
import { UserModel } from "../models/User";
export const userRouter = express.Router();

userRouter.post("/api/user/login", async (req, res) => {
  const { password, email } = req.body;
  UserModel.findOne({
    where: { email, password },
  })
    .then((user) => {
      if (user) {
        res.send(user.dataValues);
      } else {
        res.status(404).send("user not found");
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error.message);
    });
});
userRouter.post("/api/user/signup", async (req, res) => {
  const { password, email, username } = req.body;
  UserModel.create({ email: email, password: password, username }).then(
    (result) => {
      console.log(result);
    }
  );
});
