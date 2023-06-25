import express from "express";
import { client } from "../config/dbConfig";
// import { OutputData } from "@editorjs/editorjs";
import { pool as db } from "../utils/database";

export const notesRouter = express.Router();
export interface PostRequest extends Express.Request {
  body: {
    blocks: {
      id: string;
      type: string;
      data: any;
    }[];
    user: string;
  };
}
export interface GetRequest extends Express.Request {
  body: {
    user: string;
  };
}

notesRouter.post("/api/notes/create", async (req: PostRequest, res) => {
  const { blocks, user } = req.body;
  const notes = [];
  blocks.forEach((block) => {
    notes.push([user, block.id, block.type, JSON.stringify(block.data)]);
  });

  db.query(`INSERT INTO notes (user_id , block_id, type, data) VALUES ? `, [
    notes,
  ])
    .then(([rows, fieldsData]) => {
      res.status(200).send({ data: rows[0] });
    })
    .catch((err) => res.status(402).send(err.message));
});

notesRouter.get("/api/notes", async (req: GetRequest, res) => {
  const { user } = req.body;
  db.execute(`SELECT * FROM notes WHERE user_id = "${user}`)
    .then(([rows, fieldsData]) => {
      res.status(200).send({ data: rows[0] });
    })
    .catch((err) => res.status(402).send(err.message));
});
