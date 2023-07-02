import express from "express";
import { client } from "../config/dbConfig";
import { Notes } from "../models/Notes";
import { UserModel } from "../models/User";
import { Blocks } from "../models/Blocks";
// import { OutputData } from "@editorjs/editorjs";
// import { pool as db } from "../utils/database";

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

notesRouter.post("/api/notes/create", async (req: PostRequest, res) => {
  const { blocks, user } = req.body;
  const notes = [];
  // ** TODO: install sequalize to be able to get the id of the note
  Notes.create({
    userId: user,
    data: blocks,
  })
    .then((note) => {
      console.log(note);
      // if (note) {
      //   const noteId = note.dataValues.id;
      //   Blocks.create({
      //     noteId,
      //     data: blocks,
      //   })
      //     .then((block) => {
      //       console.log(block.dataValues);
      //       res.send({
      //         data : block.dataValues
      //       })
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //       res.send({ messene: 'creating block failed' })
      //     });
      // }
      if (note) {
        console.log(note.dataValues);

        res.send({
          data: {
            id: note.dataValues.id,
            userId: note.dataValues.userId,
            blocks: JSON.parse(note.dataValues.data),
          },
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({ message: "creating note failed" });
    });
});

notesRouter.get("/api/notes", async (req, res) => {
  const { userId } = req.query;
  Notes.findAll({
    where: {
      userId,
    },
  })
    .then((notes) => {
      const getNotesList = () =>
        notes.map((note) => {
          return {
            id: note.dataValues.id,
            userId: note.dataValues.userId,
            blocks: JSON.parse(note.dataValues.data),
          };
        });
      if (notes) {
        res.send({
          data: getNotesList(),
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});
