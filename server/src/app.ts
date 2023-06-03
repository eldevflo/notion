import express, { Request, Response } from "express";
import cors from "cors";
import { client } from "./config/dbConfig";
import { port } from "./constants";
import { userRouter } from "./routes/user";

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
app.use(express.json({ limit: "10mb" }));
app.use(userRouter);
app.get("/api/hi", () => {
  console.log("hiiiiiiiiiii");
});
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
