import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user";
import { notesRouter } from "./routes/notes";
import bodyParser from "body-parser";
import { sequelize } from "./utils/database";
const app = express();

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
  .then(() => {
    console.log("Connected to MySQL and synced models");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((error) => {
    console.log("Failed to sync models:", error);
  });
