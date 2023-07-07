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
    title: string;
  };
}

notesRouter.post("/api/notes/create", async (req: PostRequest, res) => {
  const { blocks, user, title } = req.body;
  Notes.create({
    userId: user,
    data: blocks,
    title,
  })
    .then((note) => {
      if (note) {
        console.log(note.dataValues);

        res.send({
          data: {
            id: note.dataValues.id,
            userId: note.dataValues.userId,
            blocks: JSON.parse(note.dataValues.data),
            title: note.dataValues.title,
          },
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(402).send({ message: "creating note failed" });
    });
});

notesRouter.post("/api/notes/update", async (req, res) => {
  const { blocks, noteId } = req.body;
  Notes.update(
    {
      data: blocks,
    },
    {
      where: {
        id: noteId,
      },
    }
  )
    .then((note) => {
      console.log(note);
      res.send({
        data: "updated successfully",
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({ message: "updating  note failed" });
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
          console.log(note);
          return {
            id: note.dataValues.id,
            userId: note.dataValues.userId,
            blocks: JSON.parse(note.dataValues.data),
            title: note.dataValues.title,
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
notesRouter.get("/api/note/id", async (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  if (id) {
    Notes.findOne({
      where: {
        id: id,
      },
    })
      .then((note) => {
        res.status(200).send({
          data: {
            id: note.dataValues.id,
            userId: note.dataValues.userId,
            blocks: JSON.parse(note.dataValues.data),
            title: note.dataValues.title,
          },
        });
      })
      .catch((error) => res.send({ error }));
  }
});
