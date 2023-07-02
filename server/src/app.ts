import express, { Request, Response } from "express";
import cors from "cors";
import { client } from "./config/dbConfig";
import { port } from "./constants";
import { userRouter } from "./routes/user";
import { notesRouter } from "./routes/notes";
import bodyParser from "body-parser";
import { sequelize } from "./utils/database";
const app = express();

async function run() {
  try {
    await client.connect();
    console.log("connected to database");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(cors());
//body purser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(userRouter);
app.use(notesRouter);
sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
