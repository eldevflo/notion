import express from "express";
import { client } from "../config/dbConfig";
import { dbName } from "../constants";
// import { OutputData } from "@editorjs/editorjs";

export const notesRouter = express.Router();
// export interface Request extends Express.Request {
//   body: OutputData;
// }
// notesRouter.post("/api/notes/create", async (req: Request, res) => {
//   try {
//     const { blocks, time, version } = req.body;
//     await client.connect();
//     const database = client.db(dbName);
//     const notes = database.collection("notes");
//     notes.insertOne(req.body);
//     console.log(req.body);
//   } catch (err) {
//     res.send(err.message);
//   } finally {
//     client.close();
//   }
// });
