import { Request, Response } from "express";
import { Notes } from "../models/Notes";
import { PostRequest } from "../routes/notes";
import { Op } from "sequelize";
export function getNotesByUserId(
  userId: Request["query"]["userId"],
  res: Response
) {
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
}
export function getNoteById(req: Request, res: Response) {
  const { id } = req.query;
  if (id) {
    Notes.findOne({
      where: {
        id: id,
      },
    })
      .then((note) => {
        if (note) {
          res.status(200).send({
            data: {
              id: note.dataValues.id,
              userId: note.dataValues.userId,
              blocks: JSON.parse(note.dataValues.data),
              title: note.dataValues.title,
            },
          });
        } else {
          res.status(404).send({
            data: "id is not found",
          });
        }
      })
      .catch((error) => res.send({ error }));
  } else {
    res.status(402).send({
      data: "id is not specified",
    });
  }
}

export function getNoteByQuery(
  query: Request["query"]["query"],
  res: Response
) {
  Notes.findAll({
    where: {
      title: {
        [Op.like]: "%" + query + "%",
      },
    },
  })
    .then((notes) => {
      const getNotesList = () =>
        notes.map((note) => {
          return {
            id: note.dataValues.id,
            userId: note.dataValues.userId,
            blocks: JSON.parse(note.dataValues.data),
            title: note.dataValues.title,
          };
        });
      if (!notes.length) {
        res.send({
          data: [],
        });
        return;
      }
      res.send({
        data: getNotesList(),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
}

export function createNote(req: PostRequest, res: Response) {
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
}

export function updateNote(req: Request, res: Response) {
  const { id, blocks, title } = req.body;

  if (id) {
    Notes.update(
      {
        title,
        data: blocks,
      },
      {
        where: { id: id },
      }
    )
      .then((note) => {
        res.send({
          data: note,
        });
      })
      .catch((error) => res.send({ data: error }));
  }
}
